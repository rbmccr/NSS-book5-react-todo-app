import React, { Component } from 'react'
import TodoItem from './../todo-item/TodoItem'

export default class TodoList extends Component {

  listenForDelete = (e) => {
    if (e.target.id) {
      let id = e.target.id
      this.props.deleteTodo(id)
    }
  }

  render() {
    const todoNode = this.props.todos.map( (todo) => {
      return (<TodoItem todo={todo} key={todo.id}/>)
    })
    return (
      <ul onClick={this.listenForDelete}>
        {todoNode} {/* array of todo items */}
      </ul>
    )
  }

}