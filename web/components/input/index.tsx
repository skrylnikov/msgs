import { h } from 'preact';
import { useState, useRef } from 'preact/hooks';
import { cx } from 'linaria';

import { wrapper, input, label, focused } from './style';

import useClickAway from 'react-use/lib/useClickAway';

interface Props {
  labelText: string;
}

export const InputComponent = ({labelText}: Props)=>{

  const ref = useRef(null);

  const [isFocused, changeFocused] = useState(false);

  useClickAway(ref, ()=>{
    changeFocused(false);
  });

  console.log(isFocused);
  

return (<div ref={ref} class={cx(wrapper, isFocused && focused)} onClick={()=>changeFocused(true)}>
    <input class={input} onClick={()=>changeFocused(true)}></input>
    <label class={label} onClick={()=>changeFocused(true)}>{labelText}</label>
  </div>)
} 