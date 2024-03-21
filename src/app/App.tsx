import { Link } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/'}>Главдая</Link>
      <Link to={'/about'}>О нас</Link>
      <AppRouter />
    </div>
  );
};

export default App;
