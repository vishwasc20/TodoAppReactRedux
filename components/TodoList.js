import React, { Component } from 'react';
import TodoItem from './TodoItem.js';

//Todolist component which displays the todo items
export default class TodoList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { todos } = this.props;
    const todoItems = todos.map((itemObj,index) => {
      return (<TodoItem { ...itemObj } key={ index } />);
    });

    return (
      <div id="todoList">
          { todoItems }
      </div>
    );
  }
}
