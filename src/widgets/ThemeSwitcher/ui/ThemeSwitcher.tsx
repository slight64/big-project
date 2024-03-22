import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';
import SunIcon from 'shared/assets/icons/sun-icon.svg';
import MoonIcon from 'shared/assets/icons/moon-icon.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames(cls.themeSwitcher, {}, [className])}>
      <input
        onChange={toggleTheme}
        className={cls.input}
        type="checkbox"
        id="theme-switcher"
        checked={theme === Theme.LIGHT}
      />
      <label className={cls.label} htmlFor="theme-switcher">
        {theme === Theme.LIGHT ? (
          <SunIcon className={cls.icon} />
        ) : (
          <MoonIcon className={cls.icon} />
        )}
      </label>
    </div>
  );
};
