'use client'
import React, {useState, useEffect} from 'react';
import style from './style.module.css';
import { Menu, LogOut, Sun } from 'lucide-react';

interface ThemeState {
    lightMode: boolean;
  }  

export default function Navbar() {
    const localStorageKey = 'lightMode';
    const [lightMode, setLightMode] = useState<boolean>(() => {
      const storedValue = localStorage.getItem(localStorageKey);
      return storedValue !== null ? storedValue === 'true' : false;
    });

    useEffect(() => {
        const body = document.querySelector('body');
        if (body) {
          if (lightMode) {
            body.classList.add('light_mode');
          } else {
            body.classList.remove('light_mode');
          }
        }
        // Atualiza o localStorage quando o estado do tema muda
        localStorage.setItem(localStorageKey, lightMode.toString());
      }, [lightMode]);
    
      const toggleLightMode = () => {
        setLightMode(prevMode => !prevMode);
      };
  return (
    <span className={style.navbar}>
        <Menu className={style.menu_navbar} />
      <div>
        Olá usuário!
      </div>
      <div>
        <Sun className={style.menu_navbar} onClick={toggleLightMode} />
        <LogOut className={style.menu_navbar}/>
      </div>

    </span>
  )
}
