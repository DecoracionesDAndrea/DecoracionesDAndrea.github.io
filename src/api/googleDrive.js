const FOLDER_ID = import.meta.env.VITE_DRIVE_FOLDER_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

// Datos de ejemplo para desarrollo
const EJEMPLO_EVENTOS = [
  { id: '1', name: 'Boda en la Playa.jpg' },
  { id: '2', name: 'Cumpleaños 15 Años.jpg' },
  { id: '3', name: 'Aniversario Dorado.jpg' },
  { id: '4', name: 'Fiesta de Graduación.jpg' },
  { id: '5', name: 'Decoración Navideña.jpg' },
  { id: '6', name: 'Bautizo Elegante.jpg' },
];

export const fetchEventos = async () => {
  // Si no hay API Key configurada, devuelve datos de ejemplo
  if (!API_KEY || !FOLDER_ID) {
    console.warn('⚠️ Google Drive API no configurada. Usando datos de ejemplo.');
    return EJEMPLO_EVENTOS;
  }

  try {
    const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parent&fields=files(id,name)&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.error) {
      console.error('Error en Google Drive API:', data.error);
      return EJEMPLO_EVENTOS;
    }
    
    return data.files || EJEMPLO_EVENTOS;
  } catch (error) {
    console.error('Error fetching eventos:', error);
    return EJEMPLO_EVENTOS;
  }
};