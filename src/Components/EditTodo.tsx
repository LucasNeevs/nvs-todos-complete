import {
  Box, Button, Text, TextInput,
} from 'grommet';

interface TodoProps {
  edittedTodo: string;
  // eslint-disable-next-line no-unused-vars
  onEditATodo: (newTodo: string) => void;
  onSaveAEdittedTodo: () => void;
  onCloseEditting: () => void;
}

const EditTodo = (props: TodoProps): JSX.Element => {
  const {
    edittedTodo, onEditATodo, onSaveAEdittedTodo, onCloseEditting,
  } = props;

  const onEdit = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    onEditATodo(evt.target.value);
  };

  return (
    <Box
      fill="horizontal"
      align="center"
      justify="center"
      background="background-contrast"
      pad="large"
    >
      <Box
        fill="horizontal"
        margin="none"
        pad={{
          vertical: 'xsmall',
        }}
      >
        <Text weight="bold" color="status-critical">
          Edit your todo here
        </Text>
      </Box>
      <Box
        fill="horizontal"
        direction="row"
      >
        <TextInput
          value={edittedTodo}
          onChange={onEdit}
        />
        <Button
          label="Save"
          onClick={onSaveAEdittedTodo}
          primary
        />
        <Button
          label="Cancel"
          onClick={onCloseEditting}
          color="status-critical"
          primary
        />
      </Box>
    </Box>
  );
};

export default EditTodo;
