import React from 'react';
import {connect} from 'react-redux';
import TodoList from '../components/TodoList';

const mapStateToProps = (state) => ({
  todos: state.todos
})

const ViewTodoList = connect(
  mapStateToProps
)(TodoList)

export default ViewTodoList;
