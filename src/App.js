import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import TodoItemHead from "./components/TodoItemHead";
//import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


class App extends Component {
  render() {
    return (
      <div className="App">
        {
         /*Esto es un comentario en JSX*/
         /*
         <TodoItemHead />
         <TodoForm addTodo={(todo) => console.log(todo)} />
         */
        <TodoList />
        }
      </div>
    );
  }
}

export default App;
