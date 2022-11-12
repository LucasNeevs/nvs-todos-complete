import { Box, TextInput, Button } from 'grommet';
import React, { useState } from 'react';

interface FieldProps {
  // eslint-disable-next-line no-unused-vars
  onSaveTodo: (newTodo: string) => void;
}

const Field = (props: FieldProps): JSX.Element => {
  const { onSaveTodo } = props;

  const [newTodo, setNewTodo] = useState<string>('');

  const onCreateTodo = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTodo(evt.target.value);
  };

  const onSaveNewTodo = (): void => {
    onSaveTodo(newTodo);
    setNewTodo('');
  };

  return (
    <Box
      fill="horizontal"
      align="center"
      justify="center"
      background="field-background"
    >
      <Box
        width="large"
        direction="row"
        align="center"
        justify="center"
        pad="large"
      >
        <TextInput
          value={newTodo}
          onChange={onCreateTodo}
          onKeyDown={(e): void => {
            if (e.key === 'Enter') onSaveNewTodo();
            if (e.key === 'Delete') setNewTodo('');
          }}
        />
        <Button
          label="Save"
          onClick={onSaveNewTodo}
          primary
        />
      </Box>
    </Box>
  );
};

export default Field;
