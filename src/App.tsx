import React from 'react';
import './App.css';
import ListCards from './components/ListCards'; // Asegúrate de que la ruta sea correcta
import Header from './components/Header';
import Foot from './components/Foot';

function App() {
  return (
    <div className="App">
      <Header title='Deportivos Villavicencio'/>
      <div style={{ margin: '20px 0' }}></div> {/* Margen horizontal */}
      <main className="flex justify-center items-center min-h-screen">
        <ListCards />
      </main>
      <Foot/>
    </div>
  );
}

export default App;
