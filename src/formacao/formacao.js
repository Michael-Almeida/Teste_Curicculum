import React from 'react';

export default function formacao() {
  const Container = {
    display: 'flex',
  };
  return (
    <div style={Container}>
      <h2>Formação</h2>
      <ul>
        <li>
          Cursando: Técnico em Informática – Escola Profissional Fundatec - 4º
          módulo
        </li>
        <li>
          Formado:Pós-Graduado em Gestão de Vendas e Relacionamento - UniRitter
          –2020
        </li>
        <li>Formado: Bacharel em Administração – FAPA - 2018</li>
      </ul>
    </div>
  );
}
