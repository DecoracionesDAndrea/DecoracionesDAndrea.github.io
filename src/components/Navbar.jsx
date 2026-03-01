import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const tabs = [
  { label: 'Inicio', to: '/', type: 'link' },
  { label: 'Galería', href: '#galeria', type: 'anchor' },
  { label: 'Ubícanos', href: '#ubicacion', type: 'anchor' },
];

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef([]);

  useEffect(() => {
    const idx = tabs.findIndex((t) => t.type === 'link' && t.to === location.pathname);
    if (idx !== -1) setActiveTab(idx);
  }, [location.pathname]);

  useEffect(() => {
    const el = tabRefs.current[activeTab];
    if (el) {
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <nav className="bg-[var(--color-primary)] text-white sticky top-0 z-50 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-stretch w-full min-h-[72px]">

        {/* 1. Logo */}
        <div className="flex flex-1 items-center">
          <Link to="/" className="flex items-center gap-2-6 hover:opacity-80 transition shrink-0">
            <span className="text-xl text-[var(--color-bg)] lobster-regular tracking-tight">
              Decoraciones Andrea
            </span>
          </Link>
        </div>

        {/* 2. Centro — Inicio | Galería | WhatsApp separados con justify-between */}
        <div className="relative flex flex-1 items-stretch justify-between">

          {tabs.map((tab, i) => {
            const isActive = activeTab === i;
            const cls = `flex items-center px-6 py-6 vend-sans-regular transition-colors duration-200 whitespace-nowrap ${
              isActive
                ? 'text-[var(--color-secondary-light)]'
                : 'text-[var(--color-bg)] hover:text-[var(--color-secondary-light)]'
            }`;

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
                onClick={() => setActiveTab(i)}
              >
                {tab.label}
              </a>
            );
          })}

          {/* WhatsApp */}
          <a
            href="https://wa.me/998805588?text=Hola%20Decoraciones%20Andrea%2C%20me%20gustaría%20saber%20más%20sobre%20sus%20decoraciones."
            target="_blank"
            rel="noreferrer"
            className="flex items-center bg-green-500 px-6 py-2 my-auto text-[var(--color-bg)] rounded-full vend-sans-regular hover:bg-green-600 hover:scale-105 transition-all duration-200 whitespace-nowrap"
          >
            WhatsApp
          </a>

          {/* Indicador deslizante — relativo al bloque 2 completo */}
          <span
            className="absolute bottom-0 h-[3px] bg-[var(--color-secondary-light)] rounded-full transition-all duration-300"
            style={indicatorStyle}
          />
        </div>

        {/* 3. Theme Toggle */}
        <div className="flex flex-1 justify-end items-center">
          <button
            onClick={toggleTheme}
            className="text-2xl hover:scale-125 transition-transform duration-200 p-2"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>

      </div>
    </nav>
  );
};