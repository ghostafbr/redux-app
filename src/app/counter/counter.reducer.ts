import {Action, createReducer, on} from "@ngrx/store";
import * as actions from "./counter.actions";

/*export function counterReducer( state: number = 10, action: Action ) {
  switch ( action.type ) {
    case increment.type:
      return state + 1;
    case decrement.type:
      return state - 1;
    default:
      return state;
  }
}*/

export const initialState = 10;
export  const _counterReducer = createReducer(
  initialState,
  on(actions.increment, state => state + 1),
  on(actions.decrement, state => state - 1),
  on(actions.multiply, (state, {number}) => state * number),
  on(actions.divide, (state, {number}) => state / number),
  on(actions.reset, state => initialState),
);

export function counterReducer(state: any, action: Action) {
  return _counterReducer(state, action);
}
