import React from 'react'
import { connect } from 'react-redux'

import { setFilter } from '../actions/actions.js'

import {
  none,
  completed,
  incomplete
} from '../constants'

const FilterP = ({ value, setFilterC }) => (
  <div className="filter">
    <span 
      className={value === none ? "checked" : "unchecked"} 
      onClick={() => setFilterC(none)} 
    >
    all
    </span>
    <span 
      className={value === completed ? "checked" : "unchecked"}
      onClick={() => setFilterC(completed)}
    >
    {completed}
    </span>
    <span
      className={value === incomplete ? "checked" : "unchecked"}
      onClick={() => setFilterC(incomplete)}
    >
    {incomplete}
    </span>
  </div>
)

const mapStateToProps = state => {
  return {
    value: state.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setFilterC: value => dispatch(setFilter(value))
  }
} 

const Filter = connect(mapStateToProps, mapDispatchToProps)(FilterP)

export default Filter
