import { Route, Routes } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage/';
import { MainPage } from 'pages/MainPage/';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/'}>Главдая</Link>
      <Link to={'/about'}>О нас</Link>
      <Suspense fallback={<>Loading</>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
