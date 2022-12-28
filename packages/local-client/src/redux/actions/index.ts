import { CellDirection, CellTypes } from './../cell';
import { ActionTypes } from '../action-types';

export interface MoveCellAction {
  type: ActionTypes.MOVE_CELL;
  payload: {
    id: string;
    direction: CellDirection;
  };
}

export interface UpdateCellAction {
  type: ActionTypes.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
}

export interface DeleteCellAction {
  type: ActionTypes.DELETE_CELL;
  payload: string;
}

export interface InsertCellAfterAction {
  type: ActionTypes.INSERT_CELL_AFTER;
  payload: {
    id: string | null;
    type: CellTypes;
  };
}

export interface BundleStartAction {
  type: ActionTypes.BUNDLE_START;
  payload: {
    cellId: string;
  };
}

export interface BundleCompleteAction {
  type: ActionTypes.BUNDLE_COMPLETE;
  payload: {
    cellId: string;
    bundle: {
      code: string;
      err: string;
    };
  };
}

export type Action =
  | MoveCellAction
  | UpdateCellAction
  | DeleteCellAction
  | InsertCellAfterAction
  | BundleStartAction
  | BundleCompleteAction;
