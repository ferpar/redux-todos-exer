import { combineReducers } from 'redux'
import {
  ADD_TODO,
  REM_TODO,
  TOGGLE_TODO,
  SET_FILTER
} from '../actions/actionTypes.js'

import {
  none,
  completed,
  incomplete
} from '../constants'

const initialState = {
  todos: [],
  filter: none
}

const filter = function( filterValue = none, action) {
  switch (action.type) {
    default: 
    return filterValue
  }
}

const todos = function( state = [], {type, text, id}) {
  let arrIndex = null;
  switch (type) {
    case ADD_TODO:
      return [...state, {text, id, complete: false}];
    case REM_TODO:
      arrIndex = state.findIndex(elem => elem.id===id);
      return [...state.slice(0, arrIndex), ...state.slice(arrIndex + 1)];
    case TOGGLE_TODO:
      arrIndex = state.findIndex(elem => elem.id===id);
      return [...state.slice(0, arrIndex),
        {text, id, complete: !state[arrIndex].complete},
            state.slice(arrIndex + 1)]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todos: todos,
  filter: filter
})

console.log(rootReducer)

export default rootReducer;
