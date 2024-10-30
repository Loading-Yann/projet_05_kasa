// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import KasaRouter from './components/KasaRouter';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <KasaRouter />
      <Footer />
    </div>
  );
}

export default App;
