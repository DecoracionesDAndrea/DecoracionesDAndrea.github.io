const FOLDER_ID = '17JmBJicJCXvo28yABnLmJ_joDHq5xe9b';
const API_KEY = 'AIzaSyD2pXYJFlu73Pd2QXNLT-CXw_5erDBThP8';

export const fetchEventos = async () => {
  if (!API_KEY || !FOLDER_ID) {
    console.warn('⚠️ Google Drive API no configurada.');
    return [];
  }

  try {
    const query = `'${FOLDER_ID}' in parents and trashed = false and mimeType contains 'image/'`;
    const fields = 'files(id, name)';
    const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&fields=${encodeURIComponent(fields)}&key=${API_KEY}`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      console.error('Error en Google Drive API:', data.error);
      return [];
    }
    
    return data.files.map(file => ({
      id: file.id,
      name: file.name,
      // Usamos el thumbnailLink pero cambiamos el tamaño final (s2000) para que se vea en alta calidad
      url: `https://lh3.googleusercontent.com/u/0/d/${file.id}=w1000-h1000`
    }));
  } catch (error) {
    console.error('Error fetching eventos:', error);
    return [];
  }
};