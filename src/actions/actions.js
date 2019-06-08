import {
  ADD_TODO,
  REM_TODO,
  TOGGLE_TODO,
  SET_FILTER
} from './actionTypes.js'

let idx = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  text,
  idx: idx++ 
})

export const remTodo = idx => ({
  type: REM_TODO,
  idx
})

export const toggleTodo = idx => ({
  type: TOGGLE_TODO,
  idx
})

export const setFilter = value => ({
  type: SET_FILTER,
  value
})

