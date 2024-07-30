import React from 'react'
import style from './Input.module.scss';

export interface InputProps{
    value?:string,
    onChange?:()=>{},
    label?:string,
    placeholder?:string,
    disabled?:boolean,
    required?:boolean
}
function Input({value,onChange,label,placeholder,disabled,required}:InputProps) {
  return (
    <div className={style.inputCont}>
       {label &&
        <label className={style.label}>
            {label}
        </label>
       }
       <input
       className={style.input}
       placeholder={placeholder}
       disabled={disabled}
       value={value}
       onChange={onChange}
       required={required}
       ></input>
    </div>
  )
}

export default Input