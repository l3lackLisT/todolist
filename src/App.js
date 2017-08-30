import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header';
import Content from './containers/content';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      todos: []
    }
  }
  onInputText = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  addTodo = () => {
    console.log(1)
    const todo = {
      text: this.state.text
    }
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Header />
        <Content 
          onInputText={this.onInputText}
          text={this.state.text}
          addTodo={this.addTodo}
        />
         {
           this.state.todos.map(todo => (
             <div>{todo.text}</div>
           ))
         }
      </div>
    );
  }
}

export default App;
