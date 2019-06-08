import React from 'react'
import { connect } from 'react-redux'

import { 
  remTodo,
  toggleTodo
} from '../actions/actions.js'

import {
  none,
  completed,
  incomplete
} from '../constants'

const ListP = ({
  todos,
  filter,
  toggleTodoC
}) => (
  <div className="todo-list">
    {console.log(filter)}
    <ol>
      {todos.length !== 0 
      ?
      todos
        .filter((todo)=>{
          switch (filter){
            case completed:
              return todo.complete === true
            case incomplete:
              return todo.complete === false
            case none:
            default:
              return todo
          }
        })
        .map((todo, index)=>(
        <li
          className={todo.complete ? "complete" : "incomplete"} 
          idx={todo.idx} 
          key={index}
          onClick = {()=>toggleTodoC(todo.idx)}
        >
            {todo.text}
        </li>
      ))
      :
      <li className="default-msg">no todos</li>
      }
    </ol>
  </div>
)

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodoC: idx => {console.log(idx); dispatch(toggleTodo(idx)) } 
  }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ListP)

export default List
