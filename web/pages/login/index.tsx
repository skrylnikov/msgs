import { h } from 'preact';
import { useState } from 'preact/hooks';

import { wrapper, page, header } from './style';
import { InputComponent } from '../../components';
import { theme } from '../../theme';

import { login } from '../../features/login/effects';
import { userStore } from '../../features/login/store';

console.log(userStore);


export const LoginPage = ({}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (<div class={page}>
    <header class={header}><h1>MSGS</h1></header>
    <div class={wrapper}>
      <h1>Login</h1>
      <p>Welcome to the best decentralized messenger*</p>
      <InputComponent labelText={'username'} color={theme.colorPrimary} onChange={setUsername}/>
      <InputComponent labelText={'password'} color={theme.colorPrimary} onChange={setPassword} isPasswor={true}/>
      <button onClick={()=>{
        login({username, password});
      }}>Login</button>
    </div>
  </div>)
};