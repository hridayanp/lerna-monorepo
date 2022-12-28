import { useEffect } from 'react';
import './CodeCell.css';
import CodeEditor from '../CodeEditor/CodeEditor';
import Preview from '../Preview/Preview';
import ResizableComponent from '../ResizableComponent/ResizableComponent';
import { Cell } from '../../redux';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useCumulativeCode } from '../../hooks/useCumulativeCode';

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();

  const bundle = useTypedSelector((state) => state.bundles[cell.id]);
  const cumulativeCode = useCumulativeCode(cell.id);

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumulativeCode);
      return;
    }

    const timer = setTimeout(async () => {
      createBundle(cell.id, cumulativeCode);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cell.id, cumulativeCode, createBundle]);
  return (
    <ResizableComponent direction="vertical">
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <ResizableComponent direction="horizontal">
          <CodeEditor
            onChange={(value) => updateCell(cell.id, value)}
            initialValue={cell.content}
          />
        </ResizableComponent>

        <div
          style={{
            backgroundColor: 'white',
            height: '100%',
            flexGrow: 1,
          }}
        >
          {!bundle || bundle.loading ? (
            <div className="progress-cover">
              <progress className="progress is-small is-primary" max="100">
                Loading
              </progress>
            </div>
          ) : (
            bundle && <Preview code={bundle.code} bundlingStatus={bundle.err} />
          )}
        </div>
      </div>
    </ResizableComponent>
  );
};

export default CodeCell;
