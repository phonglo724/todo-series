import { Component } from 'react';

import './App.css';

import TodoContainer from './components/TodoContainer'
import TodoForm from './components/TodoForm'

const todosURL = "http://localhost:3000/todos/"

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    fetch(todosURL)
      .then(response => response.json())
      .then(todos => this.setState({todos}))
  }

  removeTodo = (todoToRemove) => {
    let filteredTodos = this.state.todos.filter(todo => {
      return todo !== todoToRemove
    })
    this.setState({
      todos: filteredTodos
    })

    fetch(todosURL + todoToRemove.id, {
      method: "DELETE"
    })
  }

  addTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })

    fetch(todosURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTodo)
    })
  }
  
  render() {
    return (
      <div className="App">
        <TodoForm addTodo={this.addTodo}/>
        <TodoContainer removeTodo={this.removeTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
