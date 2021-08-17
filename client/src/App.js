import {
  fetchTodos,
  useDeleteTodo,
  useUpdateTodo,
  useCreateTodo,
} from './hooks/TodoOperations';
import { useQuery } from 'react-query';
import { QUERY_KEYS } from './hooks/constants';

import Layout from './components/Layout/Layout.style';
import { TodoList, TodoItem } from './components/Todo';
import Input from './components/CreateTodo/Input';

const App = () => {
  const { data, isError, error, isLoading } = useQuery(QUERY_KEYS.todos, () =>
    fetchTodos()
  );
  const deleteTodo = useDeleteTodo();
  const updateTodo = useUpdateTodo();
  const createTodo = useCreateTodo();

  if (isError) return <h2>Data unavailable...{console.error(error)}</h2>;

  return (
    <Layout>
      <Input
        title='Create a todo item'
        buttonText='Create'
        onCreate={createTodo}
      />

      <TodoList>
        {!isLoading &&
          Object.entries(data).map((objEntry) => {
            const todoItem = objEntry[1];
            return (
              <TodoItem
                key={todoItem.id}
                todoItem={todoItem}
                onDelete={deleteTodo}
                onChange={updateTodo}
              />
            );
          })}
      </TodoList>
    </Layout>
  );
};

export default App;
