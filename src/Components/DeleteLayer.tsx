import {
  Box, Heading, Button, Layer, Text,
} from 'grommet';

interface DeleteLayerProps {
  onOpen: () => void;
}

const DeleteLayer = (props: DeleteLayerProps): JSX.Element => {
  const { onOpen } = props;

  const onClearAllTodos = (): void => {
    localStorage.clear();

    if (window) window.location.reload();
  };

  return (
    <Layer
      onEsc={onOpen}
      onClickOutside={onOpen}
    >
      <Box
        width="medium"
        align="center"
        justify="center"
        pad="medium"
        gap="medium"
      >
        <Heading
          level={2}
          textAlign="center"
          margin="small"
        >
          Warning
        </Heading>
        <Heading
          level={5}
          textAlign="center"
          margin="none"
        >
          If you procced, all of your data will be deleted. This change is irreversible.
        </Heading>
        <Text size="xsmall" textAlign="center" color="status-critical">
          PS: Your browser will be refresh
        </Text>
        <Box
          fill="horizontal"
          align="center"
          justify="center"
          direction="row"
          gap="small"
        >
          <Button
            label="Cancel"
            color="status-critical"
            onClick={onOpen}
            primary
          />
          <Button
            label="Procced"
            color="status-success"
            onClick={onClearAllTodos}
            primary
          />
        </Box>
      </Box>
    </Layer>
  );
};

export default DeleteLayer;
