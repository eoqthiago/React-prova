
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./index.sass";

export default function App() {
  return (
      <div className="App">
            <h1>Links</h1>
            <Link to={'/libras'}>Libras</Link>
            <Link to={'/acai'}>Acai</Link>
            <Link to={'/sorv'}>Sorvete</Link>
            <Link to={'/salario'}>Salario</Link>
            <Link to={'/tanque'}>Tanque</Link>
            <Link to={'/temperatura'}>Temperatura</Link>
            <Link to={'/numerosNaturais'}>Numeros Naturais</Link>
            <Link to={'/pattern'}>Pattern</Link>
            <Link to={'/pattern2'}>Pattern2</Link>
            <Link to={'/notas'}>Notas</Link>
    </div>
  );
};