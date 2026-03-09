import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, MessageCircle } from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  /* ── Variables de Tema ────────────────────────── */
  /* MODO OSCURO (Por defecto) */
  .nb-root {
    --bg: #0f0a1f;        /* Fondo principal lila muy oscuro */
    --bg2: #18112e;       /* Fondo de la barra */
    --bg3: #231942;       /* Fondo secundario */
    --border: rgba(168, 85, 247, 0.15); /* Borde lila sutil */
    --accent: #c084fc;    /* Lila vibrante claro */
    --accent2: #e879f9;   /* Fucsia/Lila secundario */
    --text: #fdfaef;      /* Texto principal claro */
    --text2: rgba(253, 250, 239, 0.65);
    --text3: rgba(253, 250, 239, 0.3);
    font-family: 'DM Sans', sans-serif;
  }

  /* MODO CLARO */
  .nb-root.light {
    --bg: #fdfcff;        /* Fondo principal blanco purpúreo */
    --bg2: #ffffff;       /* Fondo de la barra blanco puro */
    --bg3: #f3e8ff;       /* Lila muy suavecito */
    --border: rgba(147, 51, 234, 0.15); /* Borde lila un poco más marcado */
    --accent: #9333ea;    /* Lila oscuro/morado vibrante */
    --accent2: #d946ef;   /* Fucsia oscuro */
    --text: #2e1065;      /* Texto principal morado muy oscuro (casi negro) */
    --text2: rgba(46, 16, 101, 0.65);
    --text3: rgba(46, 16, 101, 0.3);
  }

  .nb-root * { box-sizing: border-box; }

  /* ── Transiciones Suaves para el Tema ───────── */
  .nb-bar, .nb-drawer, .nb-link, .nb-logo-text, .nb-burger, .nb-theme {
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  }

  /* ── Bar ───────────────────────────────────── */
  .nb-bar {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 64px;
    background: var(--bg2);
    border-bottom: 1px solid var(--border);
    z-index: 50;
    display: flex;
    align-items: center;
    padding: 0 20px;
    gap: 0;
    /* Efecto de cristal opcional */
    backdrop-filter: blur(12px);
    background: color-mix(in srgb, var(--bg2) 90%, transparent);
  }

  /* Logo */
  .nb-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    flex-shrink: 0;
  }
  .nb-logo-text {
    font-family: 'Syne', sans-serif;
    font-size: 1rem;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.02em;
    line-height: 1.1;
  }
  .nb-logo-dot {
    display: inline-block;
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--accent);
    margin-left: 2px;
    flex-shrink: 0;
    box-shadow: 0 0 8px var(--accent); /* Ligero brillo lila */
  }

  /* Desktop links */
  .nb-links {
    display: flex;
    align-items: stretch;
    gap: 0;
    margin-left: 32px;
    height: 100%;
    position: relative;
  }
  .nb-link {
    display: flex;
    align-items: center;
    padding: 0 16px;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text2);
    text-decoration: none;
    white-space: nowrap;
    position: relative;
    transition: color 0.2s;
    height: 100%;
  }
  .nb-link:hover { color: var(--text); }
  .nb-link.active { color: var(--accent); }

  /* Sliding indicator */
  .nb-indicator {
    position: absolute;
    bottom: 0;
    height: 3px; /* Un poco más grueso */
    background: var(--accent);
    border-radius: 3px 3px 0 0;
    transition: left 0.3s cubic-bezier(.4,0,.2,1), width 0.3s cubic-bezier(.4,0,.2,1);
    pointer-events: none;
    box-shadow: 0 -2px 10px color-mix(in srgb, var(--accent) 50%, transparent); /* Brillo debajo */
  }

  /* Spacer */
  .nb-spacer { flex: 1; }

  /* Right actions */
  .nb-actions {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }

  /* WhatsApp btn (Mantenemos verde por marca de WA, pero se adapta al tema) */
  .nb-wa {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 7px 14px;
    background: #25D366;
    color: #ffffff;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 700;
    font-family: 'Syne', sans-serif;
    text-decoration: none;
    white-space: nowrap;
    transition: background 0.18s, transform 0.14s;
    border: none;
    cursor: pointer;
  }
  .nb-wa:hover { background: #128C7E; transform: translateY(-1px); }

  /* Theme toggle */
  .nb-theme {
    width: 34px; height: 34px;
    border-radius: 8px;
    background: transparent;
    border: 1.5px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    color: var(--text2);
  }
  .nb-theme:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 10%, transparent);
  }

  /* Hamburger btn */
  .nb-burger {
    width: 34px; height: 34px;
    border-radius: 8px;
    background: transparent;
    border: 1.5px solid var(--border);
    display: none;
    align-items: center; justify-content: center;
    cursor: pointer;
    color: var(--text2);
  }
  .nb-burger:hover { border-color: var(--accent); color: var(--accent); }

  /* ── Mobile drawer ───────────────────────── */
  .nb-drawer {
    position: fixed;
    top: 64px; left: 0; right: 0;
    background: var(--bg2);
    border-bottom: 1px solid var(--border);
    z-index: 49;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.35s cubic-bezier(.4,0,.2,1), opacity 0.3s ease;
    opacity: 0;
  }
  .nb-drawer.open {
    max-height: 400px;
    opacity: 1;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1); /* Sombra en móvil */
  }
  .nb-drawer-inner {
    padding: 8px 0 16px;
    display: flex;
    flex-direction: column;
  }
  .nb-drawer-link {
    display: flex;
    align-items: center;
    padding: 13px 24px;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text2);
    text-decoration: none;
    border-left: 3px solid transparent;
  }
  .nb-drawer-link:hover {
    color: var(--text);
    background: color-mix(in srgb, var(--text) 3%, transparent);
  }
  .nb-drawer-link.active {
    color: var(--accent);
    border-left-color: var(--accent);
    background: color-mix(in srgb, var(--accent) 8%, transparent);
    font-weight: 600;
  }
  .nb-drawer-divider {
    height: 1px;
    background: var(--border);
    margin: 8px 24px;
  }
  .nb-drawer-wa {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin: 8px 24px 0;
    padding: 10px 18px;
    background: #25D366;
    color: #ffffff;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 700;
    font-family: 'Syne', sans-serif;
    text-decoration: none;
    width: fit-content;
    transition: background 0.18s;
  }
  .nb-drawer-wa:hover { background: #128C7E; }

  /* Backdrop */
  .nb-backdrop {
    position: fixed;
    inset: 0;
    top: 64px;
    background: rgba(0,0,0,0.5);
    z-index: 48;
    backdrop-filter: blur(3px);
    animation: bdIn 0.25s ease;
  }
  @keyframes bdIn { from { opacity: 0 } to { opacity: 1 } }

  /* Spacer */
  .nb-page-spacer { height: 64px; }

  /* Responsive */
  @media (max-width: 767px) {
    .nb-links { display: none; }
    .nb-wa { display: none !important; } 
    .nb-burger { display: flex !important; }
  }
`;

const tabs = [
  { label: 'Inicio',   to: '/',        type: 'link'   },
  { label: 'Galería',  to: '/galeria', type: 'link'   },
  { label: 'Ubícanos', to: '/ubicacion', type: 'link' },
  { label: 'Buscar',   to: '/buscar',  type: 'link'   },
];

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);
  const tabRefs = useRef([]);

  useEffect(() => {
    const idx = tabs.findIndex((t) => t.type === 'link' && t.to === location.pathname);
    if (idx !== -1) setActiveTab(idx);
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const el = tabRefs.current[activeTab];
    if (el) {
      setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [activeTab]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleAnchorClick = (i) => {
    setActiveTab(i);
    setMenuOpen(false);
  };

  return (
    <>
      {/* AQUÍ ESTÁ LA MAGIA DEL THEME: Lee isDark e inyecta la clase 'light' u oscura */}
      <div className={`nb-root ${isDark ? '' : 'light'}`}>
        <style>{styles}</style>

        <nav className="nb-bar">
          {/* Logo */}
          <Link to="/" className="nb-logo" onClick={() => setActiveTab(0)}>
            <span className="nb-logo-text">
              🎉 Decoraciones <br /> Andrea
            </span>
            <span className="nb-logo-dot" />
          </Link>

          {/* Desktop tabs */}
          <div className="nb-links">
            {tabs.map((tab, i) => {
              const cls = `nb-link${activeTab === i ? ' active' : ''}`;
              return tab.type === 'link' ? (
                <Link
                  key={tab.label}
                  to={tab.to}
                  ref={(el) => (tabRefs.current[i] = el)}
                  className={cls}
                  onClick={() => setActiveTab(i)}
                >
                  {tab.label}
                </Link>
              ) : (
                <a
                  key={tab.label}
                  href={tab.href}
                  ref={(el) => (tabRefs.current[i] = el)}
                  className={cls}
                  onClick={() => handleAnchorClick(i)}
                >
                  {tab.label}
                </a>
              );
            })}
            <span className="nb-indicator" style={indicatorStyle} />
          </div>

          <div className="nb-spacer" />

          {/* Actions */}
          <div className="nb-actions">
            {/* WhatsApp - Actualizado con link y texto predefinido */}
            <a
              href="https://wa.me/51998805588?text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20y%20quisiera%20informaci%C3%B3n%20para%20un%20evento."
              target="_blank"
              rel="noreferrer"
              className="nb-wa"
            >
              <MessageCircle size={15} />
              <span className="nb-wa-label">WhatsApp</span>
            </a>

            {/* Theme Toggle Button */}
            <button className="nb-theme" onClick={toggleTheme} aria-label="Cambiar tema">
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Hamburger */}
            <button
              className="nb-burger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        <div className={`nb-drawer${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
          <div className="nb-drawer-inner">
            {tabs.map((tab, i) => {
              const cls = `nb-drawer-link${activeTab === i ? ' active' : ''}`;
              return tab.type === 'link' ? (
                <Link
                  key={tab.label}
                  to={tab.to}
                  className={cls}
                  onClick={() => { setActiveTab(i); setMenuOpen(false); }}
                >
                  {tab.label}
                </Link>
              ) : (
                <a
                  key={tab.label}
                  href={tab.href}
                  className={cls}
                  onClick={() => handleAnchorClick(i)}
                >
                  {tab.label}
                </a>
              );
            })}
            <div className="nb-drawer-divider" />
            <a
              href="https://wa.me/51998805588?text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20y%20quisiera%20informaci%C3%B3n%20para%20un%20evento."
              target="_blank"
              rel="noreferrer"
              className="nb-drawer-wa"
              onClick={() => setMenuOpen(false)}
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Backdrop */}
        {menuOpen && (
          <div className="nb-backdrop" onClick={() => setMenuOpen(false)} />
        )}
      </div>

      <div className="nb-page-spacer" />
    </>
  );
};