import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Preload from './pages/Preload.jsx'
import Rutinas from './pages/Rutinas.jsx'
import Ejercicios from './pages/Ejercicios.jsx'
import Premium from './pages/Premium.jsx'
import Ajustes from './pages/Ajustes.jsx'
import Navbar from './components/Navbar.jsx';

const HomeScreen = lazy(() => import('./pages/HomeScreen'));

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Smart Trainer | Entrena de Forma Inteligente</title>
        <link rel="icon" type="image/svg+xml" href="/smart-trainer-logo.svg" />
        <meta name="description" content="Smart Trainer es la aplicación ideal para planificar y seguir tus rutinas de entrenamiento de forma inteligente. Optimiza tus entrenamientos y alcanza tus metas más rápido." />
        <meta name="keywords" content="Smart Trainer, Rutinas de Entrenamiento, Fitness, Salud, Ejercicio Inteligente" />
        <meta name="author" content="Smart Trainer Team" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            "name": "Smart Trainer",
            "operatingSystem": "Android/iOS",
            "applicationCategory": "Health & Fitness",
            "description": "Smart Trainer es una aplicación móvil que te ayuda a gestionar tus entrenamientos de manera eficiente y personalizada.",
            "url": "https://smarttrainer.app/",
          })}
        </script>
      </Helmet>
      <Suspense
        fallback={<Preload />}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/rutinas" element={<Rutinas />} />
          <Route path="/ejercicios" element={<Ejercicios />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/ajustes" element={<Ajustes />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
