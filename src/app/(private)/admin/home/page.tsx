'use client'
import React, {useState, useEffect} from 'react';
import Navbar from '@/components/dashboard/Navbar';
import Sidebar from '@/components/dashboard/Sidebar';
import style from './page.module.css';
interface ThemeState {
    lightMode: boolean;
  } 

export default function Home() {
    const localStorageKey = 'lightMode';
    const [lightMode, setLightMode] = useState<boolean>(() => {
        if (typeof window !== 'undefined') {
          const storedValue = localStorage.getItem(localStorageKey);
          return storedValue !== null ? storedValue === 'true' : false;
        } else {
          // Tratamento para quando o localStorage não está disponível

          return false;
        }
      });

    const toggleLightMode = () => {
        const newMode = !lightMode;
        setLightMode(newMode);
        localStorage.setItem(localStorageKey, newMode.toString());
      };

  return (
    <span className={`${style.container} ${lightMode ? 'light_mode' : 'dark_mode'}`}>
        <Navbar toggleLightMode={toggleLightMode} lightMode={lightMode}/>
        <Sidebar/>
        <div>Content</div>
    </span>
        
   
  )
}
