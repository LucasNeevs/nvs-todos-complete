import { Box, Button } from 'grommet';
import { Edit, Erase } from 'grommet-icons';
import { ITodo } from '../Interfaces/ITodo';

interface TodoOptionProps {
  todo: ITodo;
  // eslint-disable-next-line no-unused-vars
  onDeleteTodo: (guid: string) => void;
  onCloseEditting: () => void;
}

const TodoOption = (props: TodoOptionProps): JSX.Element => {
  const {
    todo, onDeleteTodo, onCloseEditting,
  } = props;

  const onDeletingTodo = (): void => onDeleteTodo(todo.guid);

  return (
    <Box
      direction="row"
      gap="medium"
    >
      <Button
        icon={<Erase color="status-critical" />}
        onClick={onDeletingTodo}
      />
      <Button
        icon={<Edit />}
        onClick={onCloseEditting}
      />
    </Box>
  );
};

export default TodoOption;
