import React, { useState } from 'react';
import {
  TodoCreateWrapper,
  TodoCreateInput,
  TodoCreateButton,
} from './TodoCreate.style';

const TodoCreateComponent = ({ title, buttonText, onCreate }) => {
  const [newTodo, setNewTodo] = useState('');
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };
  const handleCreate = () => {
    onCreate(newTodo);
    setNewTodo('');
  };

  return (
    <TodoCreateWrapper>
      <p>{title}</p>
      <TodoCreateInput type='text' onChange={handleChange} value={newTodo} />
      <TodoCreateButton onClick={() => handleCreate(newTodo)}>
        {buttonText}
      </TodoCreateButton>
    </TodoCreateWrapper>
  );
};

export default TodoCreateComponent;
