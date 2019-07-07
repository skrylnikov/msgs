import { h } from 'preact';
import { useState } from 'preact/hooks';
import { cx } from 'linaria';

import { wrapper, input, label, focused } from './style';

interface Props {
  labelText: string;
}

export const InputComponent = ({labelText}: Props)=>{

  const [isFocused, changeFocused] = useState(false);

  console.log(isFocused);
  

return (<div class={cx(wrapper, isFocused && focused)} onClick={()=>changeFocused(true)}>
    <input class={input} onClick={()=>changeFocused(true)}></input>
    <label class={label} onClick={()=>changeFocused(true)}>{labelText}</label>
  </div>)
} 