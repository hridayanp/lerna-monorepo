import React, { Fragment } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CellListItem from './CellListItem';
import AddCell from '../AddCell/AddCell';
import './CellList.css';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id) => {
      return data[id];
    });
  });

  const renderedCells = cells.map((cell, index) => {
    return (
      <Fragment key={index}>
        <CellListItem cell={cell} />
        <AddCell prevCellId={cell.id} />
      </Fragment>
    );
  });

  return (
    <div className="cell-list">
      <AddCell forceVisible={cells.length === 0} prevCellId={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;
