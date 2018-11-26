import React, { Component } from 'react';
import './TodoApp.css';
import Title from './title/Title'
import TodoForm from './todo-form/TodoForm'
import TodoList from './todo-list/TodoList'

class App extends Component {

  state = {
    data: [],
    todoItem: ""
  }

  setTodoItemState = (val) => {
    this.setState({ todoItem: val })
  }

  getTodos() {
    fetch("http://localhost:5002/todos")
      .then((data) => data.json())
      .then(todos => this.setState({ data: todos }))
  }

  // this syntax allows us to provide method to a child
  addTodo = () => {
    const newTodo = { text: this.state.todoItem }
    fetch("http://localhost:5002/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(newTodo)
    })
      .then(() => this.getTodos())
  }

  deleteTodo = (id) => {
    fetch(`http://localhost:5002/todos/${id}`, {
      method: "DELETE"
    })
      .then(() => this.getTodos())
  }

  render() {
    return (
      <div className="TodoApp">
        <Title />
        <TodoForm setTodoItemState={this.setTodoItemState} addTodo={this.addTodo} />
        {/* when the TodoApp renders the TodoList, we can send data to the todo list component */}
        <TodoList todos={this.state.data} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;