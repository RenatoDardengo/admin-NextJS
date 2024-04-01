import React from 'react';
import style from './style.module.css';
import { Home, UserRound, ShoppingCart, NotebookPen } from 'lucide-react';
import { SidbarProps } from '@/types';

export default function Sidebar({ collapsed }: SidbarProps) {
  return (
   <span className={` ${collapsed ? style.sidebar : style.sidebar_collapsed}`} >

<div className={style.menu}>
        <div className={style.menu_item} >
          <div><Home /></div>
          <span className={`${collapsed ? style.menu_item_text : style.menu_item_text_none}`}> Inicio</span>

        </div>
        <div className={style.menu_item} >
          <div><UserRound /></div>
          <span className={`${collapsed ? style.menu_item_text : style.menu_item_text_none}`}> Usuário</span>

        </div>
        <div className={style.menu_item} >
          <div><ShoppingCart /></div>
          <span className={`${collapsed ? style.menu_item_text : style.menu_item_text_none}`}> Produtos</span>

        </div>
        <div className={style.menu_item} >
          <div><NotebookPen /></div>
          <span className={`${collapsed ? style.menu_item_text : style.menu_item_text_none}`}> Publicações</span>
        </div>
      </div>
   </span>
  )
}
