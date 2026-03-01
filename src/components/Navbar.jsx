import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4 text-white flex justify-between items-center sticky top-0 z-50 shadow-lg">
      <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
        <span className="text-2xl font-bold tracking-tight">🎉 D'Andrea</span>
      </Link>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-blue-300 transition">Inicio</Link></li>
        <li><a href="#galeria" className="hover:text-blue-300 transition">Galería</a></li>
        <li><a href="https://wa.me/TUNUMERO" target="_blank" rel="noreferrer" className="bg-green-500 px-4 py-2 rounded-full font-bold hover:bg-green-600 transition">WhatsApp</a></li>
      </ul>
    </nav>
  );
};