import { createStore } from 'effector';

import { login } from './effects';

export const userStore = createStore({
  isLogin: false,
  username: '',
});

userStore.on(login.done, (store, { params: {username}, result})=>({...store, isLogin: result, username}));

userStore.watch(console.log);
