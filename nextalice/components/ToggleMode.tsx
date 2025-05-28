'use client'
import { useEffect, useState } from 'react';
import styles from '@/app/styles/toggletheme.module.css'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    const isDark = !dark;
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDark(isDark);
  };

  return (
    <button onClick={toggleTheme} className={styles.themeToggle}>
      {dark ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 3v1"/><path d="M12 20v1"/><path d="M3 12h1"/><path d="M20 12h1"/><path d="m18.364 5.636-.707.707"/><path d="m6.343 17.657-.707.707"/><path d="m5.636 5.636.707.707"/><path d="m17.657 17.657.707.707"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>}
    </button>
  );
}
