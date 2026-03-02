import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchEventos } from '../api/googleDrive';
import { ArrowLeft, Hash } from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  .ed-root {
    --bg: #0d0d0f;
    --bg2: #131316;
    --bg3: #1a1a1f;
    --border: rgba(255,255,255,0.07);
    --accent: #f5c842;
    --accent2: #ff6b35;
    --text: #f0ede8;
    --text2: rgba(240,237,232,0.45);
    --text3: rgba(240,237,232,0.2);
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    min-height: 100vh;
    color: var(--text);
  }
  .ed-root * { box-sizing: border-box; }

  /* Top bar */
  .ed-topbar {
    background: var(--bg2);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 72px;
    z-index: 30;
  }
  .ed-topbar-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 14px 24px;
  }
  .ed-back {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: transparent;
    border: 1.5px solid var(--border);
    border-radius: 8px;
    color: var(--text2);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    text-decoration: none;
    transition: border-color 0.18s, color 0.18s, background 0.18s;
    cursor: pointer;
  }
  .ed-back:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: rgba(245,200,66,0.05);
  }
  .ed-back svg { flex-shrink: 0; }

  /* Main layout */
  .ed-main {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 24px 64px;
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 28px;
    align-items: start;
  }
  @media (max-width: 768px) {
    .ed-main {
      grid-template-columns: 1fr;
    }
  }

  /* Image panel */
  .ed-img-panel {
    border-radius: 14px;
    overflow: hidden;
    background: var(--bg3);
    border: 1px solid var(--border);
    aspect-ratio: 4/3;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .ed-img-panel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }
  .ed-img-panel:hover img {
    transform: scale(1.03);
  }

  /* Info panel */
  .ed-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .ed-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: rgba(245,200,66,0.1);
    border: 1px solid rgba(245,200,66,0.2);
    border-radius: 6px;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    width: fit-content;
  }
  .ed-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.5rem, 3vw, 2.1rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--text);
    margin: 0;
    line-height: 1.15;
  }
  .ed-divider {
    width: 40px;
    height: 3px;
    background: var(--accent);
    border-radius: 2px;
  }
  .ed-desc {
    font-size: 0.9rem;
    color: var(--text2);
    line-height: 1.7;
    margin: 0;
  }

  /* Meta block */
  .ed-meta {
    background: var(--bg3);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .ed-meta-row {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
  .ed-meta-icon {
    width: 28px;
    height: 28px;
    border-radius: 7px;
    background: rgba(245,200,66,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    flex-shrink: 0;
    margin-top: 1px;
  }
  .ed-meta-key {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--text3);
    margin-bottom: 2px;
  }
  .ed-meta-val {
    font-size: 0.82rem;
    color: var(--text2);
    font-family: 'DM Sans', sans-serif;
    word-break: break-all;
    line-height: 1.4;
  }

  /* States */
  .ed-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 420px;
    gap: 12px;
    text-align: center;
    grid-column: 1 / -1;
  }
  .ed-spinner {
    width: 36px;
    height: 36px;
    border: 2px solid var(--border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  .ed-state-label {
    font-size: 0.85rem;
    color: var(--text3);
    margin: 0;
  }
  .ed-notfound {
    font-family: 'Syne', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #ff6b6b;
    margin: 0;
  }

  /* Accent line on image */
  .ed-img-accent {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    opacity: 0;
    transition: opacity 0.25s;
  }
  .ed-img-panel:hover .ed-img-accent {
    opacity: 1;
  }
`;

export const EventDetail = () => {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvento = async () => {
      try {
        setLoading(true);
        const data = await fetchEventos();
        const found = data.find((e) => e.id === id);
        setEvento(found || null);
      } catch (err) {
        console.error('Error loading evento:', err);
      } finally {
        setLoading(false);
      }
    };
    loadEvento();
  }, [id]);

  return (
    <div className="ed-root">
      <style>{styles}</style>

      {/* Top bar */}
      <div className="ed-topbar">
        <div className="ed-topbar-inner">
          <Link to="/" className="ed-back">
            <ArrowLeft size={15} />
            Volver a Galería
          </Link>
        </div>
      </div>

      {/* Main */}
      <main className="ed-main">
        {loading ? (
          <div className="ed-state">
            <div className="ed-spinner" />
            <p className="ed-state-label">Cargando evento...</p>
          </div>
        ) : !evento ? (
          <div className="ed-state">
            <p className="ed-notfound">Evento no encontrado</p>
            <p className="ed-state-label">El ID solicitado no existe en la galería</p>
          </div>
        ) : (
          <>
            {/* Imagen */}
            <div className="ed-img-panel">
              <img
                src={`https://lh3.googleusercontent.com/d/${id}`}
                alt={evento.name}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="ed-img-accent" />
            </div>

            {/* Info */}
            <div className="ed-info">
              <span className="ed-tag">Evento</span>

              <h1 className="ed-title">
                {evento.name.replace(/\.[^/.]+$/, '') || 'Evento sin nombre'}
              </h1>

              <div className="ed-divider" />

              <p className="ed-desc">
                Aquí puedes agregar más información sobre este evento, como descripción,
                detalles de decoración, contacto, y más.
              </p>

              {/* Meta */}
              <div className="ed-meta">
                <div className="ed-meta-row">
                  <div className="ed-meta-icon">
                    <Hash size={13} />
                  </div>
                  <div>
                    <p className="ed-meta-key">ID del evento</p>
                    <p className="ed-meta-val">{id}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};