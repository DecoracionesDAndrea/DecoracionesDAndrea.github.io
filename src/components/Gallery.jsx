import { useEffect, useState } from 'react';
import { fetchEventos } from '../api/googleDrive';
import { Card } from './Card';

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
          <p className="text-xl text-[var(--color-text-secondary)] mt-4">Cargando eventos...</p>
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
    <div className="w-full">
      <div id="galeria" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
        {eventos.map(archivo => (
          <Card
            key={archivo.id}
            id={archivo.id}
            name={archivo.name.replace(/\.[^/.]+$/, "")}
            imageUrl={`https://lh3.googleusercontent.com/d/${archivo.id}`}
          />
        ))}
      </div>
    </div>
  );
};