import React from 'react';
import './style.css';
import Apresentacao from './apresentacao.js';
import Informacoes from './informacoes.js';
import Objetivo from './objetivo.js';
import Formacao from './formacao.js';
import Experiencias from './experiencias.js';
import CursosExtras from './cursosExtras.js';

export default function Home() {
  return (
    <div>
      <Apresentacao />
      <Informacoes />
      <Objetivo />
      <Formacao />
      <Experiencias />
      <CursosExtras />
    </div>
  );
}
