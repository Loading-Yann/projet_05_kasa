// src/App.js
import React from 'react';
import { Header, Footer, KasaRouter } from './components';
import './styles/App.scss';


function App() {
  return (

    <div className="App">
      <div className="wrapper">
      <Header />
      <main>
      <KasaRouter />
      </main>
      <Footer />
      </div>
    </div>
  );
}

export default App;
