import {
  Box, Heading, CheckBox, ResponsiveContext, Button,
} from 'grommet';
import { Trash } from 'grommet-icons';
import { useContext, useState } from 'react';
import DeleteLayer from './DeleteLayer';

interface HeaderProps {
  theme: boolean;
  onChangeTheme: () => void;
}

const Header = (props: HeaderProps): JSX.Element => {
  const { theme, onChangeTheme } = props;

  const [open, setOpen] = useState<boolean>(false);

  const size = useContext(ResponsiveContext);

  const onOpen = (): void => setOpen(!open);

  return (
    <Box
      fill="horizontal"
      background="background-contrast"
    >
      <Box
        fill="horizontal"
        direction="row"
        align="center"
        justify="end"
        gap="small"
        pad={(size !== 'small') ? 'small' : 'medium'}
      >
        <Button
          title="Click here to delete all"
          icon={<Trash color="status-critical" />}
          onClick={onOpen}
        />
        <CheckBox
          checked={theme}
          onChange={onChangeTheme}
          toggle
        />
      </Box>
      <Box
        fill="horizontal"
        align="center"
        justify="center"
        pad="large"
      >
        <Heading level={1} textAlign="center">
          Todos
        </Heading>
      </Box>
      {
        open && <DeleteLayer onOpen={onOpen} />
      }
    </Box>
  );
};

export default Header;
