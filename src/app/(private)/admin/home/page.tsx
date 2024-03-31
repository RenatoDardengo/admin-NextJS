import React from 'react';
import Navbar from '@/components/dashboard/Navbar';
import Sidebar from '@/components/dashboard/Sidebar';
import style from './page.module.css';

export default function Home() {
  return (
    <span className={style.container}>
        <Navbar/>
        <Sidebar/>
        <div>Content</div>
    </span>
  )
}
