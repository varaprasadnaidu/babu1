import React, { Component } from 'react';
import Counter from './components/counter';
import TodoList from './components/todos/todo-list';
//import './App.css';
class App extends Component {
 render() {
    return (
     <div className="ui container">
        <h3>Redux Fundamentals</h3>
        <Counter />
      <TodoList />
      </div>
    );
  }
}

export default App;