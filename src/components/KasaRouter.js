// src/components/KasaRouter.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Apropos from '../pages/Apropos';
import Error from '../pages/Error';
import Card from '../components/Card'; // Remplacer Logement par Card

function KasaRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="/logement/:id" element={<Card />} /> {/* Remplacer Logement par Card */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default KasaRouter;
