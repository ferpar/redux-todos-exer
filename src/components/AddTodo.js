import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions/actions.js'


const AddTodoP = ({addTodoC}) => {

  const [text, setText] = useState('')

  return (
    <div className="input-form">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => addTodoC(text)} >Add ToDo</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoC: text => dispatch(addTodo(text))
  }
}

const AddTodo = connect(null, mapDispatchToProps)(AddTodoP)

export default AddTodo
