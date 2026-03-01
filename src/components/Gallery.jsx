import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEventos } from '../api/googleDrive';

export const Gallery = () => {
  const navigate = useNavigate();
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // 1. Nuevo estado para rastrear la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // 2. Efecto para escuchar las flechas del teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault(); // Evita que la página haga scroll
        // Avanza 1, pero no se pasa del último
        setCurrentIndex((prev) => Math.min(prev + 1, eventos.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault(); // Evita que la página haga scroll
        // Retrocede 1, pero no baja de 0
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Limpieza del evento al desmontar el componente
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [eventos.length]);

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

  const handleImageClick = (id) => {
    navigate(`/evento/${id}`);
  };

  // 3. Obtenemos solo el archivo que corresponde al índice actual
  const archivoActual = eventos[currentIndex];

  return (
    // Contenedor centrado que ocupa casi toda la altura de la pantalla
    <div id="galeria" className="w-full min-h-[calc(100vh-100px)] flex flex-col items-center justify-center p-4">
      
      {/* Tarjeta única limitada en ancho (max-w-3xl) para que no se vea gigante en PC */}
      <div 
        key={archivoActual.id} 
        onClick={() => handleImageClick(archivoActual.id)}
        className="group w-full max-w-3xl flex flex-col cursor-pointer bg-[var(--color-bg-secondary)] rounded-lg shadow-2xl border border-[var(--color-border)] overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:border-[var(--color-secondary)]"
      >
        
        {/* Contenedor de la imagen sin altura fija */}
        <div className="relative w-full bg-gray-300 dark:bg-gray-700 flex justify-center">
          
          {/* Etiqueta img intacta tal cual la enviaste */}
          <img
            src={`https://lh3.googleusercontent.com/d/${archivoActual.id}`}
            alt={archivoActual.name}
            // w-full toma todo el ancho posible
            // h-auto permite que la altura se calcule sola según la proporción
            // object-contain asegura que la imagen nunca se mutile
            className="w-full h-auto max-h-[70vh] object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />

          {/* Overlay oscuro sutil en hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200" />
        </div>

        {/* Pie de imagen perfectamente pegado */}
        <div className="p-4 w-full border-t border-[var(--color-border)]">
          <h3 className="text-[var(--color-text)] font-bold text-lg md:text-xl line-clamp-2 text-center group-hover:text-[var(--color-primary)] transition-colors">
            {archivoActual.name.replace(/\.[^/.]+$/, '') || 'Imagen'}
          </h3>
        </div>
      </div>

      {/* Indicador visual opcional de navegación */}
      <div className="mt-6 text-center text-[var(--color-text-secondary)] font-medium">
        <p>Usa las flechas ⬆️ ⬇️ para navegar</p>
        <p className="mt-1 text-sm">{currentIndex + 1} de {eventos.length}</p>
      </div>

    </div>
  );
};