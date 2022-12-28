import './AddCell.css';
import { useActions } from '../../hooks/useActions';
import React from 'react';

interface AddCellProps {
  prevCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ prevCellId, forceVisible }) => {
  const { insertCellAfter } = useActions();

  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className="add-buttons">
        <button
          className="button is-rounded is-primary i-small"
          onClick={() => insertCellAfter(prevCellId, 'code')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus"></i>
          </span>
          <span>CODE</span>
        </button>
        <button
          className="button is-rounded is-primary i-small"
          onClick={() => insertCellAfter(prevCellId, 'text')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus"></i>
          </span>
          <span>TEXT</span>
        </button>
      </div>

      <div className="divider"></div>
    </div>
  );
};

export default AddCell;
