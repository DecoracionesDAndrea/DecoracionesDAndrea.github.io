import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const EventDetail = () => {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    // Aquí puedes hacer fetch de los detalles del evento si es necesario
    // Por ahora mostramos información básica
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-blue-900 hover:underline">← Volver</Link>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <img 
              src={`https://drive.google.com/uc?export=view&id=${id}`} 
              alt="Evento"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
            />
          </div>

          <div className="mt-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Detalles del Evento</h1>
            <p className="text-gray-600 mb-4">ID del evento: {id}</p>
            <p className="text-gray-700 leading-relaxed">
              Aquí puedes agregar más información sobre este evento, como descripción,
              detalles de decoración, contacto, etc.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
