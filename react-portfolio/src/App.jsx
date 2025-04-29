// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header       from './components/Header';
import MainContent  from './components/MainContent';
import Footer       from './components/Footer';

export default function App() {
  const [dark, setDark] = useState(false);
  const icon = dark ? '🌞' : '🌙';

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      dark ? 'dark' : 'light'
    );
  }, [dark]);

  return (
    <>
      <Header onToggle={() => setDark(!dark)} icon={icon} />
      <MainContent />
      <Footer />
    </>
  );
}
