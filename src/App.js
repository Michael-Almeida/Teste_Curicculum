import React from 'react';
import './style.css';
import Apresentacao from './apresentacao/apresentacao.js';
import Informacoes from './informacoesPessoais/informacoes.js';
import Objetivo from './objetivo/objetivo.js';
import Formacao from './formacao/formacao.js';
import Experiencias from './experiencias//experiencias.js';
import CursosExtras from './cursosExtras/cursosExtras.js';

export default function Home() {
  return (
    <div class="geral">
      <Apresentacao />
      <Informacoes />
      <Objetivo />
      <Formacao />
      <Experiencias />
      <CursosExtras />
    </div>
  );
}
