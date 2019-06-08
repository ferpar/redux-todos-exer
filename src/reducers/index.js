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

const filter = function( filterValue = none, {type, value}) {
  switch (type) {
    case SET_FILTER:
      return value
    default: 
      return filterValue
  }
}

const todos = function( state = [], {type, text, idx}) {
  let arrIndex = null;
  switch (type) {
    case ADD_TODO:
      return [...state, {text, idx, complete: false}];
    case REM_TODO:
      arrIndex = state.findIndex(elem => elem.idx===idx);
      return [...state.slice(0, arrIndex), ...state.slice(arrIndex + 1)];
    case TOGGLE_TODO:
      arrIndex = state.findIndex(elem => elem.idx===idx);
      return [...state.slice(0, arrIndex),
        {text: state[arrIndex].text, idx, complete: !state[arrIndex].complete},
            ...state.slice(arrIndex + 1)]
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
