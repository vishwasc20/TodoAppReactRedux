import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeItemStatus, removeItem } from '../actions/todo-action-creator.js';

//TodoItem component which is responsible for displaying the todo
class TodoItem extends Component {
  constructor(props){
    super(props);
  }

  todoItemStatusChange = () => {
    this.props.changeItemStatus(this.props.itemId);
  }

  removeItem = () => {
    this.props.removeItem(this.props.itemId);
  }

  render(){

    const { item, status } = this.props;
    const labelStyle = status ? ({textDecoration:'line-through'}) : {};

    return (
      <div className="todoItem">
        <input type="checkbox" checked={status} onChange={this.todoItemStatusChange}/>
        <label style={labelStyle}>{item}</label>
        <button onClick={this.removeItem}>Delete</button>
      </div>
    );
  }
}

export default connect(null, { changeItemStatus, removeItem })(TodoItem);
