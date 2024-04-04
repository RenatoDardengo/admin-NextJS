import React from 'react';
import { ButtonProps } from '@/types';
import style from './style.module.css';
export default function ButtonCustom({ label, onClick, className, type, icon}: ButtonProps) {
    var selectClass:string="";
    switch(className){

        case 'btn_primary':
            selectClass = style.btn_primary
        break;
        case 'btn_secondary':
            selectClass = style.btn_secondary
        break;
        case 'btn_danger':
            selectClass = style.btn_danger
        break;
        case 'btn_success':
            selectClass = style.btn_success
            break;
        case 'btn-warning':
            selectClass = style.btn_warning
        break;
        default:
            selectClass = style.btn_default
            break;
       
    }
  
    return (
        <button className={`${selectClass} ${style.btn}`} onClick={onClick} type={type}>
            {icon}
            {label}
        </button>
    );
}
