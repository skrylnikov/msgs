import { purry } from './purry';
import { Dictionary } from './types';

const _mapObj = (list: any, fn: (item: any, key: string) => any) => {
  const result: any = {};
  Object.keys(list).forEach((key) => result[key] = fn(list[key], key));
  return result;
};

export function mapObj<T, R, K extends keyof any>(list: Dictionary<T, K>, fn: (item: T, key: K) => R): Dictionary<R, K>;
export function mapObj<T, R, K extends keyof any>(fn: (item: T, key: string) => R, list: Dictionary<T, K>): Dictionary<R, K>;
export function mapObj<T, R, K extends keyof any>(fn: (item: T, key: string) => R): (list: Dictionary<T, K>) => Dictionary<R, K>;
export function mapObj(...args: any[]) {
  return purry(_mapObj)(...args);
}