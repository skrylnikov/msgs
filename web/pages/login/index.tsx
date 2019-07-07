import { h } from 'preact';

import { wrapper, page, header } from './style';
import { InputComponent } from '../../components';

export const LoginPage = ({}) => {



  return (<div class={page}>
    <header class={header}><h1>MSGS</h1></header>
    <div class={wrapper}>
      <h1>Login</h1>
      <p>Welcome to the best decentralized messenger*</p>
      <InputComponent labelText={'username'}/>
    </div>
  </div>)
};