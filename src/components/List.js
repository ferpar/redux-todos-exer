import React from 'react'
import { connect } from 'react-redux'

import { 
  remTodo,
  toggleTodo
} from '../actions/actions.js'

const ListP = ({todos}) => (
  <div className="todo-list">
    <ol>
      {todos.length !== 0 
      ?
      todos.map((todo, idx)=>(
        <li key={idx}>{todo.text}</li>
      ))
      :
      <li>loading...</li>
      }
    </ol>
  </div>
)

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const List = connect(mapStateToProps, null)(ListP)

export default List
