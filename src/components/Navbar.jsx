import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="bg-[var(--color-primary)] p-4 text-white flex justify-between items-center sticky top-0 z-50 shadow-lg transition-colors duration-300">
      <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
        <span className="text-2xl font-bold tracking-tight">🎉 D'Andrea</span>
      </Link>
      
      <ul className="flex gap-6 items-center">
        <li><Link to="/" className="hover:text-[var(--color-secondary-light)] transition">Inicio</Link></li>
        <li><a href="#galeria" className="hover:text-[var(--color-secondary-light)] transition">Galería</a></li>
        <li><a href="https://wa.me/TUNUMERO" target="_blank" rel="noreferrer" className="bg-green-500 px-4 py-2 rounded-full font-bold hover:bg-green-600 transition">WhatsApp</a></li>
        
        <li>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30 transition"
            title={isDark ? 'Modo claro' : 'Modo oscuro'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  );
};