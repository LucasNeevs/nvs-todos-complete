import { Box } from 'grommet';
import { useState } from 'react';
import { ITodo } from '../Interfaces/ITodo';
import EditTodo from './EditTodo';
import TodoItem from './TodoItem';

interface TodoProps {
  todo: ITodo;
  // eslint-disable-next-line no-unused-vars
  onDeleteTodo: (guid: string) => void;
  // eslint-disable-next-line no-unused-vars
  onEditTodo: (guid: string, newTodo: string) => void;
}

const Todo = (props: TodoProps): JSX.Element => {
  const {
    todo, onDeleteTodo, onEditTodo,
  } = props;

  const [edittedTodo, setEdittedTodo] = useState<string>(todo.todo);
  const [editting, setEditting] = useState<boolean>(false);

  const onCloseEditting = (): void => setEditting(!editting);

  const onEditATodo = (newTodo: string): void => setEdittedTodo(newTodo);

  const onSaveAEdittedTodo = (): void => {
    onEditTodo(todo.guid, edittedTodo);

    setEditting(!editting);
  };

  return (
    <Box
      fill="horizontal"
      direction="row"
      justify="between"
      align="center"
      border="bottom"
    >
      {
        editting ? (
          <EditTodo
            edittedTodo={edittedTodo}
            onEditATodo={onEditATodo}
            onSaveAEdittedTodo={onSaveAEdittedTodo}
            onCloseEditting={onCloseEditting}
          />
        ) : (
          <TodoItem
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onCloseEditting={onCloseEditting}
          />
        )
      }
    </Box>
  );
};

export default Todo;
