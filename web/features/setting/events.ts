import { createEvent } from 'effector';

import { themeList } from '../../theme';

export const onChangeTheme = createEvent<keyof typeof themeList>('Change theme');

