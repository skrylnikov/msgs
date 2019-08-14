import { createEffect } from 'effector';
import { register } from '../../socket/register';

export const login = createEffect<{username: string, password: string}, boolean>('login').use(async ({username, password})=>{
  await register(username, password);
  return Promise.resolve(true);
});
