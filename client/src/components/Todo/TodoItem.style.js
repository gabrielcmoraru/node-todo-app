import styled from 'styled-components';

const TodoItem = styled.li`
  display: flex;
  align-items: center;

  input[type='checkbox'] {
    margin-left: 8px;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

const TodoItemRemove = styled.button`
  margin-left: 8px;
  cursor: pointer;
`;

export { TodoItem, TodoItemRemove };
