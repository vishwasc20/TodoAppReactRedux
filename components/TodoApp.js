import React, { Component } from 'react';
import { connect } from 'react-redux';
import todoActions from '../actions/todo-action-creator.js'
import todoCss from './TodoApp.less';
import TodoTitle from './TodoTitle.js';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js';

//TodoApp container which has subcomponents TodoTitle,TodoForm and TodoList
class TodoApp extends Component {
  constructor() {
    super();
  }

  render() {
    const { todos } = this.props;

    return (
      <div id="reactApp">
        <TodoTitle title="React Todo App"/>
        <TodoForm placeHolder="What needs to be Done?" />
        <TodoList todos={todos} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps)(TodoApp);
