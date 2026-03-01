import { useEffect, useState } from 'react';
import { fetchEventos } from '../api/googleDrive';

export const Gallery = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEventos = async () => {
      try {
        setLoading(true);
        const data = await fetchEventos();
        setEventos(data || []);
      } catch (err) {
        console.error('Error loading eventos:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadEventos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: 'var(--color-primary)' }}></div>
          <p className="text-xl text-[var(--color-text-secondary)] mt-4">Cargando galería...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <p className="text-xl text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (!eventos || eventos.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <p className="text-xl text-[var(--color-text-secondary)]">No hay eventos disponibles</p>
      </div>
    );
  }

  return (
    <div id="galeria" className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-12">
        {eventos.map((archivo) => (
          <div key={archivo.id} className="group flex flex-col">
            {/* Tile de imagen */}
            <div className="relative overflow-hidden cursor-pointer transition-all duration-200 hover:scale-95 active:scale-90 h-64 bg-gray-300 dark:bg-gray-700 rounded-lg shadow-md">
              <img
                src={`https://lh3.googleusercontent.com/d/${archivo.id}`}
                alt={archivo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />

              {/* Overlay oscuro sutil en hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200" />
            </div>

            {/* Pie de imagen - Card style */}
            <div className="mt-3 bg-[var(--color-bg-secondary)] rounded-lg p-4 shadow-sm border border-[var(--color-border)]">
              <h3 className="text-[var(--color-text)] font-semibold text-sm md:text-base line-clamp-2 text-center group-hover:text-[var(--color-primary)] transition-colors">
                {archivo.name.replace(/\.[^/.]+$/, '') || 'Imagen'}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};