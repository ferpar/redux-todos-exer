import React from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo.js'
import List from './List.js'
import Filter from './Filter.js'

const Todos = () => (
  <div>
    <h1 className="main-title">Redux Add Todos</h1>
    <div className="main">
      <AddTodo />
      <List />
    </div>
    <Filter />
  </div>
)

export default Todos
