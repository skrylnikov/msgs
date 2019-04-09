import React from 'react';

import * as Theme from '../../../theme';

import { createStoreConsumer } from 'effector-react';

import { themeStore } from '../store';
import { onChangeTheme } from '../events';

const ThemeStore = createStoreConsumer(themeStore);

export const ThemeComponent = () => {

  const themeList = Object.keys(Theme);

  return (
    <>
      <p>Theme:</p>
      <ThemeStore>
        {(activeTheme) => (
          <select onChange={() => { }} value={activeTheme} name="theme" >
            {themeList.map((theme) => (
              <option onClick={() => {
                localStorage.setItem('theme', theme);
                onChangeTheme(theme);
              }} key={theme} value={theme} >{theme}</option>
            ))}
          </select>
        )}
      </ThemeStore>
    </>
  )
}