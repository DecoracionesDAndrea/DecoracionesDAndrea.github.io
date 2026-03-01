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
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Breadcrumb */}
      <div className="bg-[var(--color-bg-secondary)] shadow border-b border-[var(--color-border)]">
        <div className="container mx-auto px-4 py-8">
          <nav className="flex items-center gap-2">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-all duration-200 font-semibold"
            >
              <span>←</span> Volver a Galería
            </Link>
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-[var(--color-bg-secondary)] rounded-lg shadow-lg p-8 border-l-4 border-[var(--color-primary)]">
          <div className="mb-6">
            <img 
              src={`https://drive.google.com/uc?export=view&id=${id}`} 
              alt="Evento"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
            />
          </div>

          <div className="mt-8">
            <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Detalles del Evento</h1>
            <p className="text-[var(--color-text-secondary)] mb-4">ID del evento: {id}</p>
            <p className="text-[var(--color-text)] leading-relaxed">
              Aquí puedes agregar más información sobre este evento, como descripción,
              detalles de decoración, contacto, etc.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
