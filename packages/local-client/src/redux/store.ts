import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { persistMiddleware } from './middleware/presistMiddleware';
// import { ActionTypes } from './action-types';

export const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk, persistMiddleware)
);

//TESTING REDUX
// store.dispatch({
//   type: ActionTypes.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'code',
//   },
// }); // dispatches an action

// store.dispatch({
//   type: ActionTypes.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'text',
//   },
// });
// console.log(store.getState()); // returns the entire state object
