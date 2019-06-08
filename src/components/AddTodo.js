import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions/actions.js'


const AddTodoP = ({addTodoC}) => {

  const [text, setText] = useState('')

  const handleSubmit = (e,text) => {
    e.preventDefault();
    addTodoC(text);
    setText('');
  }

  return (
    <div className="input-form">
      <form onSubmit={(e) => handleSubmit(e, text)}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit" >Add ToDo</button>
      </form>
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
