import { h } from 'preact';
import { useState } from 'preact/hooks';

import { wrapper, page, header } from './style';
import { InputComponent } from '../../components';
import { theme } from '../../theme';

export const LoginPage = ({}) => {

  const [login, setLogin] = useState('');


  return (<div class={page}>
    <header class={header}><h1>MSGS</h1></header>
    <div class={wrapper}>
      <h1>Login</h1>
      <p>Welcome to the best decentralized messenger*</p>
      <InputComponent labelText={'username'} color={theme.colorPrimary} onChange={setLogin}/>
      <button onClick={()=>{
        console.log(login);
      }}>Login</button>
    </div>
  </div>)
};