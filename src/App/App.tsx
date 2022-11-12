import { useState } from 'react';
import { Grommet, ThemeType } from 'grommet';
import { ToastContainer } from 'react-toastify';
import Header from '../Components/Header';
import Todos from '../Components/Todos';
import MyTheme from '../../theme';
import 'react-toastify/dist/ReactToastify.css';

const App = (): JSX.Element => {
  const [theme, setTheme] = useState<boolean>(false);

  const onChangeTheme = (): void => setTheme(!theme);

  return (
    <Grommet
      theme={MyTheme as ThemeType}
      themeMode={(theme) ? 'dark' : 'light'}
      full
    >
      <ToastContainer />
      <Header
        theme={theme}
        onChangeTheme={onChangeTheme}
      />
      <Todos />
    </Grommet>
  );
};

export default App;
