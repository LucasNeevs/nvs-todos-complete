import { Box, Spinner } from 'grommet';

const Loading = (): JSX.Element => (
  <Box
    fill="horizontal"
    align="center"
    justify="center"
    pad="xlarge"
  >
    <Spinner size="large" />
  </Box>
);

export default Loading;
