import {
  ADD_TODO,
  REM_TODO,
  TOGGLE_TODO,
  SET_FILTER
} from './actionTypes.js'

let id = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  text,
  id: id++ 
})

export const remTodo = id => ({
  type: REM_TODO,
  id
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

export const setFilter = value => ({
  type: SET_FILTER,
  value
})

