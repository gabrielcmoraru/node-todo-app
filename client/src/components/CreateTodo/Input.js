import React, { useState } from 'react';
import { InputWrapper, InputText, InputButton } from './Input.style';

const Input = ({ title, buttonText, onCreate }) => {
  const [newTodo, setNewTodo] = useState('');
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };
  const handleCreate = () => {
    onCreate(newTodo);
    setNewTodo('');
  };

  return (
    <InputWrapper>
      <p>{title}</p>
      <InputText type='text' onChange={handleChange} value={newTodo} />
      <InputButton onClick={() => handleCreate(newTodo)}>
        {buttonText}
      </InputButton>
    </InputWrapper>
  );
};

export default Input;
