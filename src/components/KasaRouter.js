// src/components/KasaRouter.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Apropos from '../pages/apropos/Apropos';
import Error from '../pages/error/Error';
import { Card } from '../components'; 

function KasaRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="/logement/:id" element={<Card />} /> 
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default KasaRouter;
