import React from 'react';
import { TodoList } from './TodoList.style';

const TodoListComponent = ({ children }) => {
  return <TodoList>{children}</TodoList>;
};

export default TodoListComponent;
