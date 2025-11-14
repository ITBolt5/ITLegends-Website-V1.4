import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ManagedITSupport from './pages/ManagedITSupport.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services/managed-it-support" element={<ManagedITSupport />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
