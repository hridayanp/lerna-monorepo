export type CellTypes = 'code' | 'text';
export type CellDirection = 'up' | 'down';

export interface Cell {
  id: string;
  type: CellTypes;
  content: string;
  // This is the new property
  // bundle?: {
  //     loading: boolean;
  //     code: string;
  //     err: string;
  // }
}
