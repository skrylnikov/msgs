import { createEffect } from 'effector';
import { register } from '../../socket/register';

export const login = createEffect<{username: string}, boolean>('login').use(async ({username})=>{
  await register(username);
  return Promise.resolve(true);
});

login.watch(console.log)

// subscribe to promise resolve
login.done.watch(({result, params}) => {
  console.log('done');
  console.log(params) // {id: 1}
  console.log(result) // resolved value
})

// subscribe to promise reject (or throw)
login.fail.watch(({error, params}) => {
  console.log('fail');
  console.error(params) // {id: 1}
  console.error(error) // rejected value
})