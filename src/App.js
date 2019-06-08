import React from 'react'
import {hot} from 'react-hot-loader'
import Todos from './components/Todos.js'

class App extends React.Component {

  render() {
    return (
      <div>
      <Todos />    
      </div>
    )
  }
}

export default hot(module)(App)
