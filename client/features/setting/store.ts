import { createStore } from 'effector';

import { onChangeTheme } from './events';

import * as Theme from '../../theme';

export const themeStore = createStore<string>(localStorage.getItem('theme') || Object.keys(Theme)[0]).on(onChangeTheme, (_state, payload) => payload);
