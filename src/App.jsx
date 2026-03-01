import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Gallery } from './components/Gallery';
import { EventDetail } from './pages/EventDetail';
import './index.css';

function App() {
  const { isDark } = useTheme();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] flex flex-col transition-colors duration-300">
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <header className="w-full bg-[var(--color-bg-secondary)] shadow py-10 text-center border-b border-[var(--color-border)]">
              <h1 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--color-primary)' }}>Decoraciones Andrea</h1>
              <p className="mt-2 text-[var(--color-text-secondary)] text-lg">Transformando tus momentos en recuerdos inolvidables</p>
            </header>
            
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-12">
              <Gallery />
            </main>
          </>
        } />
        
        <Route path="/evento/:id" element={<EventDetail />} />
      </Routes>

      <footer className="mt-auto w-full py-8 text-center border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
        <p>&copy; 2026 Decoraciones Andrea</p>
      </footer>
    </div>
  );
}

export default App;