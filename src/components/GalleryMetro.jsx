import { useEffect, useState } from 'react';
import { fetchEventos } from '../api/googleDrive';

export const GalleryMetro = ({ isOpen, onClose }) => {
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

  // Asignar tamaños de tiles de forma variada (Metro UI style)
  const getTileSize = (index) => {
    const pattern = ['col-span-1 row-span-1', 'col-span-2 row-span-1', 'col-span-1 row-span-2', 'col-span-1 row-span-1'];
    return pattern[index % pattern.length];
  };

  const vibrantColors = [
    'bg-cyan-500',
    'bg-pink-500',
    'bg-blue-600',
    'bg-purple-600',
    'bg-red-500',
    'bg-orange-500',
    'bg-green-500',
    'bg-teal-600',
  ];

  if (!isOpen) return null;

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <div className="bg-[var(--color-bg)] rounded-lg p-8 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: 'var(--color-primary)' }}></div>
          <p className="text-xl text-[var(--color-text-secondary)] mt-4">Cargando galería...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <div className="bg-[var(--color-bg)] rounded-lg p-8 text-center">
          <p className="text-xl text-red-600">Error: {error}</p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-[var(--color-primary)] text-white rounded hover:opacity-80 transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-auto">
      <div className="min-h-screen bg-[var(--color-bg)] pt-24 pb-12">
        {/* Header con botón cerrar */}
        <div className="max-w-7xl mx-auto px-4 mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-[var(--color-text)]">Galería Metro</h1>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[var(--color-primary)] text-white rounded font-semibold hover:opacity-80 transition"
          >
            Cerrar
          </button>
        </div>

        {/* Grid Metro UI */}
        {eventos.length > 0 ? (
          <div className="max-w-7xl mx-auto px-4">
            <div
              className="grid gap-2 md:gap-4 pb-12 auto-rows-[200px] md:auto-rows-[280px]"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gridAutoFlow: 'dense',
              }}
            >
              {eventos.map((archivo, index) => {
                const colorClass = vibrantColors[index % vibrantColors.length];
                const tileSize = getTileSize(index);

                return (
                  <div
                    key={archivo.id}
                    className={`${tileSize} group relative overflow-hidden cursor-pointer transition-all duration-200 hover:scale-95 active:scale-90`}
                  >
                    {/* Imagen de fondo */}
                    <img
                      src={`https://lh3.googleusercontent.com/d/${archivo.id}`}
                      alt={archivo.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />

                    {/* Fallback color si la imagen no carga */}
                    <div
                      className={`${colorClass} w-full h-full absolute top-0 left-0`}
                      style={{ display: 'none' }}
                    />

                    {/* Overlay oscuro sutil */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200" />

                    {/* Título inferior izquierda - Metro Style */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent pt-8">
                      <h3 className="text-white font-bold uppercase text-xs md:text-sm line-clamp-2 leading-tight">
                        {archivo.name.replace(/\.[^/.]+$/, '') || 'Evento'}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-[var(--color-text-secondary)]">No hay eventos disponibles</p>
          </div>
        )}
      </div>
    </div>
  );
};
