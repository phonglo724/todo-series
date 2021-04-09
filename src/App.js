import { Component } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer'
import TodoForm from './components/TodoForm'

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/todos")
      .then(response => response.json())
      .then(todos => this.setState({todos}))
  }
  
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoContainer todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
