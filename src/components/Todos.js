import React from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo.js'
import List from './List.js'

const Todos = () => (
  <div>
    <h1>testing...</h1>
    <div className="main">
      <AddTodo />
      <List />
    </div>
  </div>
)

export default Todos
