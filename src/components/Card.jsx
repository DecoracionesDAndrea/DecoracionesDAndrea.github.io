import { Link } from 'react-router-dom';

export const Card = ({ id, name, imageUrl }) => {
  return (
    // 1. Añadimos w-full y una altura fija total (ej. h-[380px])
    <Link to={`/evento/${id}`} className="block group w-full h-[380px]">
      <div className="border-l-4 border-[var(--color-primary)] pl-4 bg-[var(--color-bg-secondary)] rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-l-4 hover:border-[var(--color-secondary)] h-full flex flex-col">
        
        {/* 2. Añadimos shrink-0 para evitar que flexbox encoja la imagen si el texto es largo */}
        <div className="relative overflow-hidden bg-gray-300 dark:bg-gray-700 h-64 shrink-0">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%23999"%3EImagen no disponible%3C/text%3E%3C/svg%3E'
            }}
          />
        </div>
        
        {/* 3. flex-1 hace que este div rellene el espacio exacto que sobra hasta los 380px */}
        <div className="border-t border-[var(--color-border)] p-4 flex-1 flex items-center justify-center">
          <h3 className="text-lg font-semibold text-[var(--color-text)] text-center line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors">
            {name || 'Evento sin nombre'}
          </h3>
        </div>
      </div>
    </Link>
  );
};