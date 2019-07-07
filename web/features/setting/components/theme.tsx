import { h, Fragment } from 'preact';

import * as Theme from '../../../theme';

import { useStore } from 'effector-react';

import { themeStore } from '../store';
import { onChangeTheme } from '../events';

export const ThemeComponent = () => {

  const activeTheme = useStore(themeStore);

  const themeList = Object.keys(Theme);

  return (
    <Fragment>
      <p>Theme:</p>
      <select onChange={(e: Event) => {
        if (!e.target) {
          return null;
        }
        const theme = (e.target as any).value;
        //localStorage.setItem('theme', theme);
        onChangeTheme(theme);
      }} value={activeTheme} name="theme" >
        {themeList.map((theme) => (
          <option key={theme} value={theme} >{theme}</option>
        ))}
      </select>
    </Fragment>
  )
}