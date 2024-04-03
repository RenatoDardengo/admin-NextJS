'use client'
import React, {useState, useEffect} from 'react';
import Navbar from '@/components/dashboard/Navbar';
import Sidebar from '@/components/dashboard/Sidebar';
import style from './page.module.css';
import Users from '@/components/users';
interface ThemeState {
    lightMode: boolean;
  } 

export default function Home() {
  const localStorageKey = 'lightMode';
  const [selectedComponent, setSelectedComponent] = useState<React.ReactNode | null>(null);
  const [collapse, setCollapse] = useState(true);
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
      const handleCollapse = () => {
        setCollapse(!collapse);
    };

    const handleMenuItemClick = (menuItem: string) => {
      switch (menuItem) {
          case 'users':
              setSelectedComponent(<Users/>);
              break;
          default:
              setSelectedComponent(null);
              break;
      }
  };

  return (
    <span className={`${style.container} ${lightMode ? 'light_mode' : 'dark_mode'}`}>
        <Navbar toggleLightMode={toggleLightMode} lightMode={lightMode} onCollapse={handleCollapse}/>
        <Sidebar collapsed={collapse} onItemClick={handleMenuItemClick}/>
        <div className={style.content}> {selectedComponent}</div>
    </span>
        
   
  )
}
