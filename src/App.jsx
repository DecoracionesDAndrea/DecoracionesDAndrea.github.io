import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Gallery } from './components/Gallery';
import { EventDetail } from './pages/EventDetail';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <header className="w-full bg-white shadow py-10 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900">Decoraciones D'Andrea</h1>
              <p className="mt-2 text-gray-600 text-lg">Transformando tus momentos en recuerdos inolvidables</p>
            </header>
            
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-12">
              <Gallery />
            </main>
          </>
        } />
        
        <Route path="/evento/:id" element={<EventDetail />} />
      </Routes>

      <footer className="bg-blue-900 text-white py-8 text-center mt-auto w-full">
        <p>&copy; 2026 Decoraciones D'Andrea - Hecho con React + Vite</p>
      </footer>
    </div>
  );
}

export default App;