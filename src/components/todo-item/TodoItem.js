import React, {Component} from 'react'

export default class TodoItem extends Component {

  render() {
    return (
      <li id={this.props.todo.id}>{this.props.todo.text}</li>
    )
  }
}