import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEventos } from '../api/googleDrive';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  .gl-root {
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
    min-height: calc(100vh - 100px);
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 16px 40px;
  }
  .gl-root * { box-sizing: border-box; }

  /* Card */
  .gl-card {
    width: 100%;
    max-width: 760px;
    border-radius: 16px;
    overflow: hidden;
    background: var(--bg2);
    border: 1px solid var(--border);
    cursor: pointer;
    position: relative;
    transition: transform 0.28s cubic-bezier(.22,.68,0,1.2), border-color 0.2s, box-shadow 0.28s;
    animation: cardIn 0.32s cubic-bezier(.22,.68,0,1.2);
  }
  @keyframes cardIn {
    from { opacity: 0; transform: translateY(10px) scale(0.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  .gl-card:hover {
    transform: translateY(-3px) scale(1.01);
    border-color: rgba(245,200,66,0.18);
    box-shadow: 0 24px 56px rgba(0,0,0,0.55);
  }
  .gl-card:active { transform: scale(0.98); }

  /* Image area */
  .gl-img-wrap {
    position: relative;
    width: 100%;
    background: var(--bg3);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    max-height: 65vh;
  }
  .gl-img-wrap img {
    width: 100%;
    height: auto;
    max-height: 65vh;
    object-fit: contain;
    display: block;
    transition: transform 0.4s ease;
  }
  .gl-card:hover .gl-img-wrap img {
    transform: scale(1.03);
  }
  .gl-img-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0);
    transition: background 0.22s;
  }
  .gl-card:hover .gl-img-overlay {
    background: rgba(0,0,0,0.15);
  }
  /* Gold bottom accent line */
  .gl-img-line {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    opacity: 0;
    transition: opacity 0.25s;
  }
  .gl-card:hover .gl-img-line { opacity: 1; }

  /* Card footer */
  .gl-footer {
    padding: 14px 20px;
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .gl-name {
    font-family: 'Syne', sans-serif;
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text);
    margin: 0;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: color 0.18s;
  }
  .gl-card:hover .gl-name { color: var(--accent); }
  .gl-counter-pill {
    flex-shrink: 0;
    padding: 3px 10px;
    background: var(--bg3);
    border: 1px solid var(--border);
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text3);
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.04em;
  }
  .gl-counter-pill span { color: var(--accent); }

  /* Controls row */
  .gl-controls {
    margin-top: 18px;
    width: 100%;
    max-width: 760px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  /* Prev / Next */
  .gl-nav {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .gl-nav-btn {
    width: 46px;
    height: 46px;
    border-radius: 10px;
    border: 1.5px solid var(--border);
    background: var(--bg2);
    color: var(--text2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: border-color 0.18s, color 0.18s, background 0.18s, transform 0.12s;
    flex-shrink: 0;
  }
  .gl-nav-btn:hover:not(:disabled) {
    border-color: var(--accent);
    color: var(--accent);
    background: rgba(245,200,66,0.06);
    transform: translateY(-1px);
  }
  .gl-nav-btn:active:not(:disabled) { transform: scale(0.93); }
  .gl-nav-btn:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }

  /* Progress bar */
  .gl-progress-wrap {
    flex: 1;
    height: 3px;
    background: var(--bg3);
    border-radius: 2px;
    overflow: hidden;
  }
  .gl-progress-bar {
    height: 100%;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    border-radius: 2px;
    transition: width 0.3s cubic-bezier(.4,0,.2,1);
  }

  /* Dots */
  .gl-dots {
    display: flex;
    justify-content: center;
    gap: 6px;
    flex-wrap: wrap;
  }
  .gl-dot {
    height: 6px;
    border-radius: 3px;
    background: var(--border);
    border: none;
    cursor: pointer;
    transition: width 0.22s cubic-bezier(.4,0,.2,1), background 0.18s;
    padding: 0;
    width: 6px;
  }
  .gl-dot.active {
    width: 22px;
    background: var(--accent);
  }
  .gl-dot:hover:not(.active) {
    background: var(--text3);
  }

  /* Hint */
  .gl-hint {
    text-align: center;
    font-size: 0.72rem;
    color: var(--text3);
    letter-spacing: 0.04em;
    margin-top: 2px;
  }

  /* States */
  .gl-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    gap: 10px;
    text-align: center;
  }
  .gl-spinner {
    width: 36px;
    height: 36px;
    border: 2px solid var(--border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  .gl-state p { font-size: 0.85rem; color: var(--text3); margin: 0; }
`;

export const Gallery = () => {
  const navigate = useNavigate();
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const loadEventos = async () => {
      try {
        setLoading(true);
        const data = await fetchEventos();
        setEventos(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadEventos();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentIndex((p) => Math.min(p + 1, eventos.length - 1));
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentIndex((p) => Math.max(p - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [eventos.length]);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e) => {
    const end = e.changedTouches[0].clientX;
    setTouchEnd(end);
    const dist = touchStart - end;
    if (dist > 50) setCurrentIndex((p) => Math.min(p + 1, eventos.length - 1));
    if (dist < -50) setCurrentIndex((p) => Math.max(p - 1, 0));
  };

  if (loading) return (
    <div className="gl-root"><style>{styles}</style>
      <div className="gl-state">
        <div className="gl-spinner" />
        <p>Cargando galería...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="gl-root"><style>{styles}</style>
      <div className="gl-state">
        <p style={{ color: '#ff6b6b' }}>Error: {error}</p>
      </div>
    </div>
  );

  if (!eventos.length) return (
    <div className="gl-root"><style>{styles}</style>
      <div className="gl-state">
        <p>No hay eventos disponibles</p>
      </div>
    </div>
  );

  const actual = eventos[currentIndex];
  const progress = ((currentIndex + 1) / eventos.length) * 100;

  return (
    <div className="gl-root">
      <style>{styles}</style>

      {/* Card */}
      <div
        key={actual.id}
        className="gl-card"
        onClick={() => navigate(`/evento/${actual.id}`)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-label={`Imagen ${currentIndex + 1} de ${eventos.length}: ${actual.name}`}
      >
        <div className="gl-img-wrap">
          <img
            src={`https://lh3.googleusercontent.com/d/${actual.id}`}
            alt={actual.name.replace(/\.[^/.]+$/, '') || 'Imagen del evento'}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="gl-img-overlay" />
          <div className="gl-img-line" />
        </div>

        <div className="gl-footer">
          <h3 className="gl-name">
            {actual.name.replace(/\.[^/.]+$/, '') || 'Imagen'}
          </h3>
          <div className="gl-counter-pill">
            <span>{currentIndex + 1}</span> / {eventos.length}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="gl-controls">

        {/* Nav + progress */}
        <div className="gl-nav">
          <button
            className="gl-nav-btn"
            onClick={() => setCurrentIndex((p) => Math.max(p - 1, 0))}
            disabled={currentIndex === 0}
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="gl-progress-wrap">
            <div className="gl-progress-bar" style={{ width: `${progress}%` }} />
          </div>

          <button
            className="gl-nav-btn"
            onClick={() => setCurrentIndex((p) => Math.min(p + 1, eventos.length - 1))}
            disabled={currentIndex === eventos.length - 1}
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="gl-dots" role="tablist">
          {eventos.map((_, i) => (
            <button
              key={i}
              className={`gl-dot${i === currentIndex ? ' active' : ''}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Ir a imagen ${i + 1}`}
              aria-current={i === currentIndex ? 'true' : 'false'}
              role="tab"
            />
          ))}
        </div>

        {/* Hint */}
        <p className="gl-hint">
          <span className="sm-only-hide">← → para navegar · </span>
          Toca la imagen para ver detalles
        </p>
      </div>
    </div>
  );
};