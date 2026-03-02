import { useEffect, useState } from 'react';
import { fetchEventos } from '../api/googleDrive';
import { X } from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  .gm-root {
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
    color: var(--text);
    width: 100%;
  }
  .gm-root * { box-sizing: border-box; }

  /* ── Masonry grid ────────────────────────────── */
  /*
    Pattern repeats every 8 items across 4 columns:
    [0] 2×2  [1] 1×1  [2] 1×1
              [3] 1×2  [4] 1×1
                       [5] 1×1
    [6] 1×1 [7] 2×1  (closing strip)

    We drive this entirely with named grid areas inside
    a dense auto-flow grid so gaps stay minimal.
  */
  .gm-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 180px;
    gap: 6px;
    padding-bottom: 6px;
  }

  @media (max-width: 640px) {
    .gm-grid {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 140px;
    }
  }

  /* Span helpers */
  .gm-tile      { grid-column: span 1; grid-row: span 1; }
  .gm-tile-w2   { grid-column: span 2; grid-row: span 1; }
  .gm-tile-h2   { grid-column: span 1; grid-row: span 2; }
  .gm-tile-2x2  { grid-column: span 2; grid-row: span 2; }

  /* Tile base */
  .gm-tile,
  .gm-tile-w2,
  .gm-tile-h2,
  .gm-tile-2x2 {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    background: var(--bg3);
    border: 1px solid var(--border);
    transition: transform 0.22s cubic-bezier(.22,.68,0,1.2),
                border-color 0.2s, box-shadow 0.22s;
  }
  .gm-tile:hover,
  .gm-tile-w2:hover,
  .gm-tile-h2:hover,
  .gm-tile-2x2:hover {
    transform: scale(1.025);
    z-index: 2;
    border-color: rgba(245,200,66,0.22);
    box-shadow: 0 12px 36px rgba(0,0,0,0.55);
  }
  .gm-tile:active,
  .gm-tile-w2:active,
  .gm-tile-h2:active,
  .gm-tile-2x2:active { transform: scale(0.97); }

  .gm-tile img,
  .gm-tile-w2 img,
  .gm-tile-h2 img,
  .gm-tile-2x2 img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }
  .gm-tile:hover img,
  .gm-tile-w2:hover img,
  .gm-tile-h2:hover img,
  .gm-tile-2x2:hover img { transform: scale(1.07); }

  /* Overlay */
  .gm-overlay {
    position: absolute; inset: 0;
    background: rgba(0,0,0,0);
    transition: background 0.22s;
  }
  .gm-tile:hover .gm-overlay,
  .gm-tile-w2:hover .gm-overlay,
  .gm-tile-h2:hover .gm-overlay,
  .gm-tile-2x2:hover .gm-overlay { background: rgba(0,0,0,0.22); }

  /* Label (only big tiles) */
  .gm-label {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 10px 12px 11px;
    background: linear-gradient(to top, rgba(0,0,0,0.78), transparent);
    opacity: 0;
    transform: translateY(4px);
    transition: opacity 0.22s, transform 0.22s;
  }
  .gm-tile:hover .gm-label,
  .gm-tile-w2:hover .gm-label,
  .gm-tile-h2:hover .gm-label,
  .gm-tile-2x2:hover .gm-label { opacity: 1; transform: translateY(0); }
  .gm-label h3 {
    margin: 0;
    font-family: 'Syne', sans-serif;
    font-size: 0.8rem;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Gold accent line */
  .gm-line {
    position: absolute; bottom: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    opacity: 0;
    transition: opacity 0.22s;
  }
  .gm-tile:hover .gm-line,
  .gm-tile-w2:hover .gm-line,
  .gm-tile-h2:hover .gm-line,
  .gm-tile-2x2:hover .gm-line { opacity: 1; }

  /* ── States ──────────────────────────────────── */
  .gm-state {
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    min-height: 400px; gap: 10px; text-align: center;
  }
  .gm-spinner {
    width: 36px; height: 36px;
    border: 2px solid var(--border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  .gm-state p { font-size: 0.85rem; color: var(--text3); margin: 0; }

  /* ── Lightbox ─────────────────────────────────── */
  .lb-bg {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.88);
    z-index: 50;
    display: flex; align-items: center; justify-content: center;
    padding: 16px;
    backdrop-filter: blur(10px);
    animation: lbIn 0.18s ease;
  }
  @keyframes lbIn { from { opacity: 0 } to { opacity: 1 } }
  .lb-close {
    position: fixed; top: 16px; right: 16px;
    width: 38px; height: 38px;
    border-radius: 9px;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; color: #fff; z-index: 60;
    transition: background 0.15s;
  }
  .lb-close:hover { background: rgba(255,255,255,0.15); }
  .lb-body {
    width: 100%; max-width: 900px; max-height: 90vh;
    display: flex; flex-direction: column;
    align-items: center; gap: 14px;
  }
  .lb-body img {
    max-width: 100%; max-height: 74vh;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: 0 24px 64px rgba(0,0,0,0.65);
  }
  .lb-info { text-align: center; color: #fff; }
  .lb-info h2 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(0.95rem, 2.5vw, 1.3rem);
    font-weight: 800; letter-spacing: -0.02em; margin: 0 0 6px;
  }
  .lb-hint { font-size: 0.72rem; color: rgba(255,255,255,0.28); margin: 0; }
`;

/*
  Layout pattern repeating every 8 tiles:
  index % 8:
    0 → 2×2 (big)
    1 → 1×1
    2 → 1×1
    3 → 1×2 (tall)
    4 → 1×1
    5 → 1×1
    6 → 2×1 (wide)
    7 → 1×1
  This fills a 4-column grid with almost no gaps.
*/
const getTileClass = (index) => {
  switch (index % 8) {
    case 0: return 'gm-tile-2x2';
    case 3: return 'gm-tile-h2';
    case 6: return 'gm-tile-w2';
    default: return 'gm-tile';
  }
};

export const GalleryMetro = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const load = async () => {
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
    load();
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSelectedImage(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const closeLightbox = () => setSelectedImage(null);
  const handleBgClick = (e) => { if (e.target === e.currentTarget) closeLightbox(); };

  return (
    <div className="gm-root">
      <style>{styles}</style>

      {loading ? (
        <div className="gm-state">
          <div className="gm-spinner" />
          <p>Cargando galería...</p>
        </div>
      ) : error ? (
        <div className="gm-state">
          <p style={{ color: '#ff6b6b' }}>Error: {error}</p>
        </div>
      ) : !eventos.length ? (
        <div className="gm-state">
          <p>No hay eventos disponibles</p>
        </div>
      ) : (
        <div className="gm-grid">
          {eventos.map((archivo, index) => {
            const cls = getTileClass(index);
            const isBig = cls !== 'gm-tile';
            return (
              <div
                key={archivo.id}
                className={cls}
                onClick={() => setSelectedImage(archivo)}
                role="button"
                aria-label={archivo.name.replace(/\.[^/.]+$/, '') || 'Imagen'}
              >
                <img
                  src={`https://lh3.googleusercontent.com/d/${archivo.id}`}
                  alt={archivo.name}
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="gm-overlay" />
                {isBig && (
                  <div className="gm-label">
                    <h3>{archivo.name.replace(/\.[^/.]+$/, '') || 'Imagen'}</h3>
                  </div>
                )}
                <div className="gm-line" />
              </div>
            );
          })}
        </div>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div className="lb-bg" onClick={handleBgClick}>
          <button className="lb-close" onClick={closeLightbox} aria-label="Cerrar">
            <X size={18} />
          </button>
          <div className="lb-body">
            <img
              src={`https://lh3.googleusercontent.com/d/${selectedImage.id}`}
              alt={selectedImage.name}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="lb-info">
              <h2>{selectedImage.name.replace(/\.[^/.]+$/, '') || 'Imagen'}</h2>
              <p className="lb-hint">ESC o clic afuera para cerrar</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};