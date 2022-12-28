import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import './ResizableComponent.css';
import { useEffect, useState } from 'react';
interface ResizableComponentProps {
  direction: 'horizontal' | 'vertical';
  children?: React.ReactNode;
}

const ResizableComponent: React.FC<ResizableComponentProps> = ({
  direction,
  children,
}) => {
  let resizableProps: ResizableBoxProps;
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [width, setWidth] = useState(window.innerWidth * 0.6);

  useEffect(() => {
    const listener = () => {
      setInnerHeight(window.innerHeight);
      setInnerWidth(window.innerWidth);

      if (window.innerWidth * 0.75 < width) {
        setWidth(window.innerWidth * 0.75);
      }
    };

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [width]);

  if (direction === 'horizontal') {
    resizableProps = {
      className: 'resize-horizontal',
      height: Infinity,
      width,
      resizeHandles: ['e'],
      maxConstraints: [innerWidth * 0.75, Infinity],
      minConstraints: [innerWidth * 0.2, Infinity],
      onResizeStop: (event, data) => {
        setWidth(data.size.width);
      },
    };
  } else {
    resizableProps = {
      className: 'resize-vertical',
      height: 500,
      width: Infinity,
      resizeHandles: ['s'],
      maxConstraints: [Infinity, innerHeight * 0.9],
      minConstraints: [Infinity, innerHeight * 0.2],
    };
  }

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default ResizableComponent;
