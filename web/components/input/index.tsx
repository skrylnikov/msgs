import { h } from 'preact';
import { useState, useRef } from 'preact/hooks';
import { cx } from 'linaria';

import { wrapper, input, label, focused, notEmpty } from './style';

import useClickAway from 'react-use/lib/useClickAway';

interface Props {
  labelText: string;

  primaryColor: string
}

export const InputComponent = ({labelText, primaryColor: color}: Props)=>{

  const ref = useRef(null);

  const [isFocused, changeFocused] = useState(false);
  const [value, changeValue] = useState('');

  useClickAway(ref, ()=>{
    changeFocused(false);
  });

  console.log(isFocused);
    console.log(value);
    

return (<div style={{'--input-color':color}} ref={ref} class={wrapper} onClick={()=>changeFocused(true)}>
    <input 
      class={input} 
      value={value}
      onChange={((e)=>e.target instanceof HTMLInputElement && changeValue(e.target.value))}
      onClick={()=>changeFocused(true)}></input>
    <label 
      class={cx(label, isFocused && focused, value.length>0 && notEmpty )} 
       
      >{labelText}</label>
  </div>)
} 