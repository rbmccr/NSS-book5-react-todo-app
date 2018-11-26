import React, { Component } from 'react'

export default class TodoForm extends Component {

  // fat arrow since it is referenced as callback onchange function
  handleFieldChange = (e) => {
    this.props.setTodoItemState(e.target.value)
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="new todo item" onChange={this.handleFieldChange}/>
        <button onClick={this.props.addTodo }>Save Todo</button>
      </div>
    )
  }

}