import React from 'react';
import { TodoItem, TodoItemRemove } from './TodoItem.style';

const TodoItemComponent = ({
  todoItem: { text, done, id },
  onDelete,
  onChange,
}) => {
  return (
    <TodoItem>
      <p>{text}</p>
      <input
        type='checkbox'
        defaultChecked={done}
        onChange={() => onChange({ id, done: !done })}
      />
      <TodoItemRemove onClick={() => onDelete(id)}>Delete</TodoItemRemove>
    </TodoItem>
  );
};

export default TodoItemComponent;
