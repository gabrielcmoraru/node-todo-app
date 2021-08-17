import { SERVER_URL, QUERY_KEYS } from './constants';
import { useMutation, useQueryClient } from 'react-query';

const fetchTodos = async () => {
  const response = await fetch(`${SERVER_URL}/todos`);
  return response.json();
};

const createTodo = async (todoText) => {
  const response = await fetch(`${SERVER_URL}/todo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: todoText }),
  });

  return response.json();
};

const deleteTodo = async (todoId) => {
  const response = await fetch(`${SERVER_URL}/todo/${todoId}`, {
    method: 'DELETE',
  });
  return response.json();
};

const updateTodo = async (payload) => {
  const { id, done } = payload;

  const response = await fetch(`${SERVER_URL}/todo/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ done: done }),
  });

  return response.json();
};

const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.todos]);
    },
  });

  return mutate;
};

const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.todos]);
    },
  });

  return mutate;
};

const useCreateTodo = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.todos]);
    },
  });

  return mutate;
};

export { fetchTodos, useDeleteTodo, useUpdateTodo, useCreateTodo };
