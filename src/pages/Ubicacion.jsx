import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  .loc-root {
    /* MODO OSCURO */
    --bg: #0f0a1f;        
    --bg2: #18112e;       
    --bg3: #231942;       
    --border: rgba(168, 85, 247, 0.15);
    --accent: #c084fc;    
    --accent2: #9333ea;
    --text: #fdfaef;      
    --text2: rgba(253, 250, 239, 0.65);
    --text3: rgba(253, 250, 239, 0.3);

    font-family: 'DM Sans', sans-serif;
    background: var(--bg); /* Esto ahora cubrirá el fondo */
    color: var(--text);
    width: 100%;
    min-height: 100vh; /* IMPORTANTE: Para que el color cubra toda la pantalla */
    padding: 48px 24px 64px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* MODO CLARO */
  .loc-root.light {
    --bg: #fdfcff;        
    --bg2: #ffffff;       
    --bg3: #f3e8ff;       
    --border: rgba(147, 51, 234, 0.15); 
    --accent: #9333ea;    
    --accent2: #c084fc;
    --text: #2e1065;      
    --text2: rgba(46, 16, 101, 0.65);
    --text3: rgba(46, 16, 101, 0.3);
  }

  .loc-root * { box-sizing: border-box; }

  /* Header */
  .loc-header {
    max-width: 900px;
    margin: 0 auto 28px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
  }
  
  .loc-tag {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 10px;
    background: color-mix(in srgb, var(--accent) 10%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
    border-radius: 20px;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 8px;
  }

  .loc-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.6rem, 3.5vw, 2.2rem);
    font-weight: 800;
    color: var(--text);
    margin: 0;
  }

  .loc-subtitle {
    font-size: 0.88rem;
    color: var(--text2);
    margin: 6px 0 0;
  }

  .loc-directions {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 9px 18px;
    border: 1.5px solid var(--border);
    border-radius: 9px;
    color: var(--accent);
    font-size: 0.82rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
  }

  .loc-directions:hover {
    background: color-mix(in srgb, var(--accent) 8%, transparent);
    border-color: var(--accent);
  }

  .loc-card {
    max-width: 900px;
    margin: 0 auto;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--bg2);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }

  .loc-map {
    width: 100%;
    height: 380px;
    background: var(--bg3);
  }

  .loc-map iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
    transition: filter 0.3s ease;
  }
  
  /* Filtro oscuro para el mapa (se quita en modo claro) */
  .loc-root:not(.light) .loc-map iframe {
    filter: invert(90%) hue-rotate(180deg) saturate(0.7) brightness(0.85);
  }

  .loc-separator {
    height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent2), transparent);
  }

  .loc-ref-label {
    padding: 12px 18px 10px;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--text3);
    border-bottom: 1px solid var(--border);
  }

  .loc-ref-img-wrap {
    height: 200px;
    position: relative;
    background: var(--bg3);
    overflow: hidden;
  }

  .loc-ref-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .loc-address-bar {
    padding: 15px 18px;
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .loc-address-icon {
    width: 32px; height: 32px;
    border-radius: 8px;
    background: color-mix(in srgb, var(--accent) 10%, transparent);
    display: flex; align-items: center; justify-content: center;
    color: var(--accent);
  }

  .loc-address-text {
    font-size: 0.85rem;
    color: var(--text2);
  }

  .loc-address-text strong {
    display: block;
    font-size: 0.75rem;
    color: var(--text3);
    text-transform: uppercase;
  }
`;


// ── CONFIG — cambia estos valores ──────────────────────────────
const LOCATION_DATA = {
  // Reemplaza con tu embed URL de Google Maps:
  // Maps → Share → Embed a map → copia el src del iframe
  mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2!2d-77.0282!3d-12.0464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAyJzQ3LjAiUyA3N8KwMDEnNDEuNSJX!5e0!3m2!1ses!2spe!4v1234567890',
  // URL de Google Maps para el botón "Cómo llegar"
  directionsUrl: 'https://maps.google.com/?q=Decoraciones+Andrea',
  // Dirección en texto
  address: 'Av. Ejemplo 123, Lima, Perú',
  // Imagen referencial (fachada, local, zona)
  refImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=80',
  refCaption: 'Nuestro local',
};
// ──────────────────────────────────────────────────────────────

export const Ubicacion = () => {
  const { isDark } = useTheme();

  return (
    <div className={`loc-root ${isDark ? '' : 'light'}`}>
      <style>{styles}</style>
      
      <div className="loc-header">
        <div className="loc-title-group">
          <div className="loc-tag"><MapPin size={11} /> Ubicación</div>
          <h2 className="loc-title">Encuéntranos</h2>
          <p className="loc-subtitle">Visítanos en nuestro taller de Lima</p>
        </div>
        <a href={LOCATION_DATA.directionsUrl} target="_blank" rel="noreferrer" className="loc-directions">
          <Navigation size={14} /> Cómo llegar <ExternalLink size={12} />
        </a>
      </div>

      <div className="loc-card">
        <div className="loc-map">
          <iframe src={LOCATION_DATA.mapSrc} title="Mapa" />
        </div>
        <div className="loc-separator" />
        <div className="loc-ref-label">Referencia del local</div>
        <div className="loc-ref-img-wrap">
          <img src={LOCATION_DATA.refImage} alt="Local" />
        </div>
        <div className="loc-address-bar">
          <div className="loc-address-icon"><MapPin size={16} /></div>
          <div className="loc-address-text">
            <strong>Dirección</strong>
            {LOCATION_DATA.address}
          </div>
        </div>
      </div>
    </div>
  );
};
