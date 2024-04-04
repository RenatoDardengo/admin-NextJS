import React from 'react';
import style from './style.module.css';
import { SelectProps } from '@/types';

export default function SelectCustom({onChange,options,placeholder,name, value,defaultValue, height}:SelectProps) {
  return (
    <select
            className={style.input_select} // Utilize sua classe CSS para o select
            onChange={onChange}
            name={name}
            value={value}
            defaultValue={defaultValue}
            style={{ height: height + "px" }}
        >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
  )
}
