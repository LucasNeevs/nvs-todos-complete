import { Box, Text } from 'grommet';
import { ITodo } from '../Interfaces/ITodo';
import TodoOption from './TodoOption';

interface TodoProps {
  todo: ITodo;
  // eslint-disable-next-line no-unused-vars
  onDeleteTodo: (guid: string) => void;
  onCloseEditting: () => void;
}

const TodoItem = (props: TodoProps): JSX.Element => {
  const {
    todo, onDeleteTodo, onCloseEditting,
  } = props;

  return (
    <Box
      fill="horizontal"
      direction="row"
      justify="between"
      align="center"
      pad={{
        horizontal: 'medium',
      }}
    >
      <Text size="medium">
        {todo.guid}
      </Text>
      <Text size="medium">
        {todo.todo}
      </Text>
      <TodoOption
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onCloseEditting={onCloseEditting}
      />
    </Box>
  );
};

export default TodoItem;
