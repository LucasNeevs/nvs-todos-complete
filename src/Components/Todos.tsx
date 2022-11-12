import { Box, Spinner } from 'grommet';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import Field from './Field';
import Todo from './Todo';
import { ITodo } from '../Interfaces/ITodo';

const Todos = (): JSX.Element => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const getTodos = new Promise((resolve, reject): void => {
    const data = Object.entries(localStorage);

    const newTodos: ITodo[] = [];

    for (let i = 0; i < data.length; i += 1) {
      newTodos.push({
        guid: data[i][0],
        todo: data[i][1],
      });
    }

    if (data.length > 0) resolve(newTodos);
    else reject();
  });

  const onGetTodos = async (): Promise<void> => {
    await getTodos
      .then((response): void => {
        toast.success('Data successfully loaded 🥳');

        setTodos(response as ITodo[]);
      })
      .catch((error): void => {
        toast.error('No data found 😫');

        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  const onUpdateLocalStorage = (guid: string, newTodo: string): void => {
    localStorage.getItem(guid);
    localStorage.removeItem(guid);
    localStorage.setItem(guid, newTodo);
  };

  const onSaveTodo = (newTodo: string): void => {
    const todoGuid = uuidv4();

    setTodos([
      ...todos,
      {
        guid: todoGuid,
        todo: newTodo,
      },
    ]);

    localStorage.setItem(todoGuid, newTodo);
  };

  const onDeleteTodo = (guid: string): void => {
    const newTodos = todos.filter((todo: ITodo) => todo.guid !== guid);

    localStorage.removeItem(guid);
    setTodos(newTodos);
  };

  const onEditTodo = (guid: string, newTodo: string): void => {
    const newTodos = todos;

    const targetIndex = todos.findIndex((t): boolean => t.guid === guid);
    const field = todos[targetIndex];

    field.todo = newTodo;

    newTodos.map((todo): ITodo[] => ((todo.guid === guid) ? { ...todos, ...field } : todos));

    onUpdateLocalStorage(guid, newTodo);
    setTodos(newTodos);
  };

  useEffect((): void => {
    onGetTodos();
  }, []);

  return (
    <Box
      fill="horizontal"
      align="center"
      justify="center"
    >
      <Field
        onSaveTodo={onSaveTodo}
      />
      <Box
        fill="horizontal"
        align="center"
        justify="center"
        pad={{
          vertical: 'medium',
        }}
      >
        {
          (todos.length === 0) ? (
            <Spinner size="large" />
          ) : todos.map((todo: ITodo): JSX.Element => (
            <Todo
              key={todo.guid}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onEditTodo={onEditTodo}
            />
          ))
        }
      </Box>
    </Box>
  );
};

export default Todos;
