'use client'
import React, {useState} from 'react';
import style from './style.module.css';
import { Home, UserRound, ShoppingCart, NotebookPen } from 'lucide-react';
import { SidbarProps } from '@/types';

export default function Sidebar({ collapsed, onItemClick }: SidbarProps) {
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (itemName:string) => {
    setSelectedItem(itemName);
    onItemClick(itemName);
  };

  return (
   <span className={` ${collapsed ? style.sidebar : style.sidebar_collapsed}`} >

<div className={style.menu}>
<div className={`${style.menu_item} ${selectedItem === 'inicio' ? style.selected_item : ''}`} onClick={() => handleItemClick('inicio')}>
          <div><Home /> </div>
          <span className={ style.menu_item_text}> Inicio</span>

        </div>
        <div className={`${style.menu_item} ${selectedItem === 'users' ? style.selected_item : ''}`} onClick={() => handleItemClick('users')}>
          <div><UserRound /></div>
          <span className={ style.menu_item_text }> Usuário</span>

        </div>
        <div className={`${style.menu_item} ${selectedItem === 'produtos' ? style.selected_item : ''}`} onClick={() => handleItemClick('produtos')}>
          <div><ShoppingCart /></div>
          <span className={ style.menu_item_text }> Produtos</span>

        </div>
        <div className={`${style.menu_item} ${selectedItem === 'publicacoes' ? style.selected_item : ''}`} onClick={() => handleItemClick('publicacoes')}>
          <div><NotebookPen /></div>
          <span className={ style.menu_item_text }> Publicações</span>
        </div>
      </div>
   </span>
  )
}
