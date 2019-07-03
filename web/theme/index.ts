import { white } from './white';
import { night } from './night';

import { indexBy } from 'remeda';

import { mapObj, Dictionary } from 'libs';


export const themeList = {
  white,
  night,
};

export type Thema = typeof white | typeof night;


const keys = <T>(object: T): Array<keyof T> => Object.keys(object) as any;

export const getStyle = (_theme: Thema = white) => keys(_theme).reduce((result: Dictionary<string, string>, key) => {
  result['--' + key] = _theme[key];

  return result;
}, {});


export const theme: Dictionary<string, keyof Thema> = mapObj(indexBy(keys(white), (x) => x), (x) => `var(--${x})`);
