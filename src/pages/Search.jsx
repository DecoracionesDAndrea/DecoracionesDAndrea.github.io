import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEventos } from '../api/googleDrive';
import { Search as SearchIcon, X, Grid2x2, Grid3x3, Grid } from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  .search-root {
    --bg: #0d0d0f;
    --bg2: #131316;
    --bg3: #1a1a1f;
    --border: rgba(255,255,255,0.07);
    --border-focus: rgba(255,200,80,0.5);
    --accent: #f5c842;
    --accent2: #ff6b35;
    --text: #f0ede8;
    --text2: rgba(240,237,232,0.45);
    --text3: rgba(240,237,232,0.25);
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    min-height: 100vh;
    color: var(--text);
  }

  .search-root * { box-sizing: border-box; }

  /* Header */
  .sh-header {
    position: sticky;
    top: 72px;
    z-index: 40;
    background: var(--bg2);
    border-bottom: 1px solid var(--border);
    backdrop-filter: blur(12px);
  }
  .sh-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 20px 24px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .sh-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.4rem, 3vw, 2rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--text);
    margin: 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .sh-title span {
    color: var(--accent);
  }

  /* Search bar */
  .sb-wrap {
    position: relative;
    width: 100%;
    max-width: 640px;
    display: flex;
    align-items: center;
  }
  .sb-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text2);
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    z-index: 1;
  }
  .sb-input {
    width: 100%;
    padding: 12px 44px 12px 44px;
    background: var(--bg3);
    border: 1.5px solid var(--border);
    border-radius: 10px;
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 400;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    line-height: 1.4;
  }
  .sb-input::placeholder {
    color: var(--text3);
  }
  .sb-input:focus {
    border-color: var(--border-focus);
    box-shadow: 0 0 0 3px rgba(245,200,66,0.08);
  }
  .sb-clear {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.06);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    color: var(--text2);
    transition: background 0.15s, color 0.15s;
    flex-shrink: 0;
  }
  .sb-clear:hover {
    background: rgba(245,200,66,0.15);
    color: var(--accent);
  }

  /* Toolbar */
  .sh-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
  .sh-count {
    font-size: 0.8rem;
    color: var(--text2);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-weight: 500;
  }
  .sh-count strong {
    color: var(--accent);
    font-weight: 700;
  }
  .cols-group {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .cols-label {
    font-size: 0.75rem;
    color: var(--text3);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-right: 2px;
  }
  .col-btn {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid var(--border);
    border-radius: 7px;
    background: transparent;
    cursor: pointer;
    color: var(--text2);
    transition: all 0.15s;
  }
  .col-btn:hover {
    border-color: rgba(245,200,66,0.3);
    color: var(--text);
  }
  .col-btn.active {
    background: var(--accent);
    border-color: var(--accent);
    color: #0d0d0f;
  }

  /* Main */
  .sm-main {
    max-width: 1280px;
    margin: 0 auto;
    padding: 24px 24px 48px;
  }

  /* Empty states */
  .se-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    gap: 12px;
    text-align: center;
  }
  .se-icon {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    background: var(--bg3);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text3);
    margin-bottom: 4px;
  }
  .se-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text2);
    margin: 0;
  }
  .se-sub {
    font-size: 0.85rem;
    color: var(--text3);
    margin: 0;
    max-width: 280px;
    line-height: 1.5;
  }
  .se-btn {
    margin-top: 8px;
    padding: 8px 20px;
    background: var(--accent);
    color: #0d0d0f;
    border: none;
    border-radius: 8px;
    font-family: 'Syne', sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.15s, transform 0.1s;
  }
  .se-btn:hover { opacity: 0.88; transform: translateY(-1px); }

  /* Spinner */
  .sg-spinner {
    width: 36px;
    height: 36px;
    border: 2px solid var(--border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* Grid */
  .sg-grid {
    display: grid;
    gap: 12px;
  }

  /* Card */
  .sc-card {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    aspect-ratio: 1;
    cursor: pointer;
    background: var(--bg3);
    border: 1px solid var(--border);
    transition: transform 0.22s cubic-bezier(.22,.68,0,1.2), box-shadow 0.22s;
  }
  .sc-card:hover {
    transform: translateY(-3px) scale(1.01);
    box-shadow: 0 16px 40px rgba(0,0,0,0.5);
    border-color: rgba(245,200,66,0.2);
  }
  .sc-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
    display: block;
  }
  .sc-card:hover img {
    transform: scale(1.06);
  }
  .sc-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 50%);
    opacity: 0;
    transition: opacity 0.22s;
  }
  .sc-card:hover .sc-overlay {
    opacity: 1;
  }
  .sc-label {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 12px 11px;
    background: linear-gradient(to top, rgba(0,0,0,0.72), transparent);
    transform: translateY(4px);
    opacity: 0;
    transition: opacity 0.22s, transform 0.22s;
  }
  .sc-card:hover .sc-label {
    opacity: 1;
    transform: translateY(0);
  }
  .sc-label h3 {
    margin: 0;
    font-family: 'Syne', sans-serif;
    font-size: 0.82rem;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: 0.01em;
  }

  /* Lightbox */
  .slb-bg {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.9);
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    backdrop-filter: blur(10px);
    animation: lbFade 0.18s ease;
  }
  @keyframes lbFade { from { opacity: 0 } to { opacity: 1 } }
  .slb-close {
    position: fixed;
    top: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #fff;
    z-index: 60;
    transition: background 0.15s;
  }
  .slb-close:hover { background: rgba(255,255,255,0.15); }
  .slb-body {
    width: 100%;
    max-width: 900px;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .slb-body img {
    max-width: 100%;
    max-height: 72vh;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: 0 24px 64px rgba(0,0,0,0.6);
  }
  .slb-info {
    text-align: center;
    color: #fff;
  }
  .slb-info h2 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1rem, 2.5vw, 1.4rem);
    font-weight: 800;
    margin: 0 0 12px;
    letter-spacing: -0.02em;
  }
  .slb-actions {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .slb-btn-primary {
    padding: 9px 22px;
    background: var(--accent);
    color: #0d0d0f;
    border: none;
    border-radius: 8px;
    font-family: 'Syne', sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.15s;
  }
  .slb-btn-primary:hover { opacity: 0.85; }
  .slb-btn-sec {
    padding: 9px 22px;
    background: rgba(255,255,255,0.1);
    color: #fff;
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.15s;
  }
  .slb-btn-sec:hover { background: rgba(255,255,255,0.18); }
  .slb-hint {
    margin-top: 8px;
    font-size: 0.75rem;
    color: rgba(255,255,255,0.3);
  }
`;

export const Search = () => {
  const navigate = useNavigate();
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [columns, setColumns] = useState(3);

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
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredEventos = eventos.filter((evento) =>
    evento.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const clearSearch = () => setSearchQuery('');
  const closeLightbox = () => setSelectedImage(null);
  const handleBgClick = (e) => { if (e.target === e.currentTarget) closeLightbox(); };

  return (
    <div className="search-root">
      <style>{styles}</style>

      {/* Header */}
      <div className="sh-header">
        <div className="sh-inner">
          <h1 className="sh-title">
            Buscar <span>Eventos</span>
          </h1>

          {/* Search bar */}
          <div className="sb-wrap">
            <span className="sb-icon">
              <SearchIcon size={18} />
            </span>
            <input
              type="text"
              className="sb-input"
              placeholder="Escribe el nombre del evento..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            {searchQuery && (
              <button className="sb-clear" onClick={clearSearch} aria-label="Limpiar búsqueda">
                <X size={14} />
              </button>
            )}
          </div>

          {/* Toolbar */}
          {searchQuery && (
            <div className="sh-toolbar">
              <p className="sh-count">
                <strong>{filteredEventos.length}</strong>{' '}
                resultado{filteredEventos.length !== 1 ? 's' : ''}
              </p>
              {filteredEventos.length > 0 && (
                <div className="cols-group">
                  <span className="cols-label">Vista</span>
                  {[
                    { n: 2, Icon: Grid2x2 },
                    { n: 3, Icon: Grid3x3 },
                    { n: 4, Icon: Grid },
                  ].map(({ n, Icon }) => (
                    <button
                      key={n}
                      className={`col-btn${columns === n ? ' active' : ''}`}
                      onClick={() => setColumns(n)}
                      aria-label={`${n} columnas`}
                      title={`${n} columnas`}
                    >
                      <Icon size={15} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main */}
      <main className="sm-main">
        {loading ? (
          <div className="se-state">
            <div className="sg-spinner" />
            <p className="se-sub">Cargando eventos...</p>
          </div>
        ) : error ? (
          <div className="se-state">
            <p className="se-title" style={{ color: '#ff6b6b' }}>Error: {error}</p>
          </div>
        ) : !searchQuery ? (
          <div className="se-state">
            <div className="se-icon">
              <SearchIcon size={22} />
            </div>
            <p className="se-title">Empieza a buscar</p>
            <p className="se-sub">Escribe el nombre de un evento para ver los resultados</p>
          </div>
        ) : filteredEventos.length === 0 ? (
          <div className="se-state">
            <div className="se-icon">
              <X size={22} />
            </div>
            <p className="se-title">Sin resultados</p>
            <p className="se-sub">No encontramos nada para "{searchQuery}"</p>
            <button className="se-btn" onClick={clearSearch}>Limpiar búsqueda</button>
          </div>
        ) : (
          <div
            className="sg-grid"
            style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
          >
            {filteredEventos.map((archivo) => (
              <div
                key={archivo.id}
                className="sc-card"
                onClick={() => setSelectedImage(archivo)}
              >
                <img
                  src={`https://lh3.googleusercontent.com/d/${archivo.id}`}
                  alt={archivo.name}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="sc-overlay" />
                <div className="sc-label">
                  <h3>{archivo.name.replace(/\.[^/.]+$/, '') || 'Imagen'}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div className="slb-bg" onClick={handleBgClick}>
          <button className="slb-close" onClick={closeLightbox} aria-label="Cerrar">
            <X size={20} />
          </button>
          <div className="slb-body">
            <img
              src={`https://lh3.googleusercontent.com/d/${selectedImage.id}`}
              alt={selectedImage.name}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="slb-info">
              <h2>{selectedImage.name.replace(/\.[^/.]+$/, '') || 'Imagen'}</h2>
              <div className="slb-actions">
                <button
                  className="slb-btn-primary"
                  onClick={() => navigate(`/evento/${selectedImage.id}`)}
                >
                  Ver detalles
                </button>
                <button className="slb-btn-sec" onClick={closeLightbox}>
                  Cerrar
                </button>
              </div>
              <p className="slb-hint">ESC o clic afuera para cerrar</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};