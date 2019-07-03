import { themeList } from '../../theme';

import { createStore } from 'effector';

import { onChangeTheme } from './events';

export const themeStore = createStore<keyof typeof themeList>('white').on(onChangeTheme, (_state, payload) => payload);



