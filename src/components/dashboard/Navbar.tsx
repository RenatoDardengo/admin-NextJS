
import React from 'react';
import style from './style.module.css';
import { Menu, LogOut, Sun, SunMoon } from 'lucide-react';
import { NavbarProps } from '@/types';

export default function Navbar({toggleLightMode, lightMode, onCollapse}:NavbarProps) {
    return (
        <span className={style.navbar}>
          <Menu className={style.menu_navbar} onClick={onCollapse} />
          <div>
            Olá usuário!
          </div>
          <div>
            {lightMode ? (
              <Sun className={style.menu_navbar} onClick={toggleLightMode} />
            ) : (
              <SunMoon className={style.menu_navbar} onClick={toggleLightMode} />
            )}
            <LogOut className={style.menu_navbar} />
          </div>
        </span>
      );

}
