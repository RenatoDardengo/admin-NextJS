import React from 'react';
import { InputTextProps } from '@/types';
import style from './style.module.css';

export default function InputTextCustom({placeholder,
    onChange,
    name,
    value,
    defaultValue,
    type,
    height,
    mask}:InputTextProps) {

    if(mask){

        return (
          <div>InputTextCustom</div>
        )
    }else{
        return (
            <input
            className={style.input_text}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            value={value}
            defaultValue={defaultValue}
            type={type}
            style={{ height: height + "px" }}
            />
          )
    }
}
