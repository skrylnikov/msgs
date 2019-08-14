import { h } from 'preact';
import { useState, useRef, useEffect } from 'preact/hooks';
import { cx } from 'linaria';

import { wrapper, input, label, focused, notEmpty } from './style';

import useClickAway from 'react-use/lib/useClickAway';

interface Props {
  labelText: string;
  color: string;
  isPasswor?: boolean;

  onChange: (value: string)=>void;
}

export const InputComponent = ({labelText, color, onChange, isPasswor=false}: Props)=>{

  const ref = useRef(null);

  const [isFocused, changeFocused] = useState(false);
  const [value, changeValue] = useState('');

  useClickAway(ref, ()=>{
    changeFocused(false);
  });

  useEffect(()=>{
    onChange(value);
  }, [value]);

return (<div style={{'--input-color':color}} ref={ref} class={wrapper} onClick={()=>changeFocused(true)}>
    <input 
      type={isPasswor ?'password' :'input'}
      class={input} 
      value={value}
      onChange={((e)=>e.target instanceof HTMLInputElement && changeValue(e.target.value))}
      onClick={()=>changeFocused(true)}></input>
    <label 
      class={cx(label, isFocused && focused, value.length>0 && notEmpty )} 
       
      >{labelText}</label>
  </div>)
} 