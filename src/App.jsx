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

  .app-root {
    --bg: #0d0d0f;
    --bg2: #131316;
    --bg3: #1a1a1f;
    --border: rgba(255,255,255,0.07);
    --accent: #f5c842;
    --accent2: #ff6b35;
    --text: #f0ede8;
    --text2: rgba(240,237,232,0.45);
    --text3: rgba(240,237,232,0.2);
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .app-root * { box-sizing: border-box; }

  .app-hero {
    width: 100%;
    background: var(--bg2);
    border-bottom: 1px solid var(--border);
    padding: 40px 24px 36px;
    text-align: center;
  }
  .app-hero h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    color: var(--text);
    margin: 0 0 8px;
  }
  .app-hero h1 span { color: var(--accent); }
  .app-hero p {
    font-size: clamp(0.9rem, 2vw, 1.05rem);
    color: var(--text2);
    margin: 0;
    font-weight: 300;
    font-style: italic;
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
  }
  .app-footer p {
    margin: 0;
    font-size: 0.78rem;
    color: var(--text3);
    letter-spacing: 0.06em;
    font-weight: 500;
    text-transform: uppercase;
  }
  .app-footer span { color: var(--accent); }
`;

function App() {
  const { isDark } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className="app-root">
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