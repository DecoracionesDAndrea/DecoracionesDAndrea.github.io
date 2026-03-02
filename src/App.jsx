import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Gallery } from './components/Gallery';
import { GalleryMetro } from './components/GalleryMetro';
import { EventDetail } from './pages/EventDetail';
import { Search } from './pages/Search';
import './index.css';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  /* MODO OSCURO (Por defecto) */
  .app-root {
    --bg: #0f0a1f;        
    --bg2: #18112e;       
    --bg3: #231942;       
    --border: rgba(168, 85, 247, 0.15); 
    --accent: #c084fc;    
    --text: #fdfaef;      
    --text2: rgba(253, 250, 239, 0.65);
    --text3: rgba(253, 250, 239, 0.3);
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* MODO CLARO */
  .app-root.light {
    --bg: #fdfcff;        
    --bg2: #ffffff;       
    --bg3: #f3e8ff;       
    --border: rgba(147, 51, 234, 0.15); 
    --accent: #9333ea;    
    --text: #2e1065;      
    --text2: rgba(46, 16, 101, 0.65);
    --text3: rgba(46, 16, 101, 0.3);
  }

  .app-root * { box-sizing: border-box; }

  .app-hero {
    width: 100%;
    background: var(--bg2);
    border-bottom: 1px solid var(--border);
    padding: 40px 24px 36px;
    text-align: center;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  .app-hero h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    color: var(--text);
    margin: 0 0 8px;
    transition: color 0.3s ease;
  }
  .app-hero h1 span { 
    color: var(--accent); 
    transition: color 0.3s ease;
  }
  .app-hero p {
    font-size: clamp(0.9rem, 2vw, 1.05rem);
    color: var(--text2);
    margin: 0;
    font-weight: 300;
    font-style: italic;
    transition: color 0.3s ease;
  }

  .app-main {
    flex: 1;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 32px 16px;
  }

  .app-footer {
    width: 100%;
    border-top: 1px solid var(--border);
    padding: 20px 24px;
    text-align: center;
    background: var(--bg2);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  .app-footer p {
    margin: 0;
    font-size: 0.78rem;
    color: var(--text3);
    letter-spacing: 0.06em;
    font-weight: 500;
    text-transform: uppercase;
    transition: color 0.3s ease;
  }
  .app-footer span { 
    color: var(--accent); 
    transition: color 0.3s ease;
  }
`;

function App() {
  const { isDark } = useTheme();

  // Mantenemos el toggle en el documentElement para Tailwind (si lo usas en otros lados)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className={`app-root ${isDark ? '' : 'light'}`}>
      <style>{styles}</style>
      <Navbar />

      <div style={{ paddingTop: '64px' }}>
      <Routes>
        <Route path="/" element={
          <>
            <header className="app-hero">
              <h1>Decoraciones <span>Andrea</span></h1>
              <p>Transformando tus momentos en recuerdos inolvidables</p>
            </header>
            <main className="app-main">
              <Gallery />
            </main>
          </>
        } />

        <Route path="/galeria" element={
          <main className="app-main">
            <GalleryMetro />
          </main>
        } />

        <Route path="/buscar" element={<Search />} />
        <Route path="/evento/:id" element={<EventDetail />} />
      </Routes>
      </div>

      <footer className="app-footer">
        <p>© 2026 Decoraciones <span>Andrea</span></p>
      </footer>
    </div>
  );
}

export default App;