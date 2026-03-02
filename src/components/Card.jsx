import { Link } from 'react-router-dom';

export const Card = ({ id, name, imageUrl }) => {
  return (
    <Link to={`/evento/${id}`} className="block group w-full h-[380px]">
      {/* Usamos las variables del tema: --bg2, --accent, --border */}
      <div 
        className="border-l-4 pl-4 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 h-full flex flex-col"
        style={{ 
          backgroundColor: 'var(--bg2)', 
          borderColor: 'var(--accent)' 
        }}
      >
        
        {/* Contenedor de la imagen */}
        <div 
          className="relative overflow-hidden h-64 shrink-0 transition-colors duration-300"
          style={{ backgroundColor: 'var(--bg3)' }}
        >
          <img 
            src={imageUrl} 
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%23999"%3EImagen no disponible%3C/text%3E%3C/svg%3E';
            }}
          />
        </div>
        
        {/* Contenedor del título */}
        <div 
          className="border-t p-4 flex-1 flex items-center justify-center transition-colors duration-300"
          style={{ 
            borderColor: 'var(--border)',
            backgroundColor: 'var(--bg2)' 
          }}
        >
          <h3 
            className="text-lg font-bold text-center line-clamp-2 transition-colors duration-300"
            style={{ color: 'var(--text)' }}
            onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text)'}
          >
            {name || 'Evento sin nombre'}
          </h3>
        </div>
      </div>
    </Link>
  );
};