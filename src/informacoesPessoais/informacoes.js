import React from 'react';
import './style.css';

export default function informacoes() {
  return (
    <div>
      <h2>Informações pessoais</h2>
      <p>Bairro Vila Nova - Porto Alegre/RS</p>
      <p>Contato: (51) 98483.3340</p>
      <p>E-mail: michaelcardoso97@gmail.com</p>
      <div class="botoes">
        <button>
          <a href="httbuttons://www.linkedin.com/in/michael93c/">Linkedin</a>
        </button>
        <button>
          <a href="https://github.com/Michael-Almeida">GitHub</a>
        </button>
      </div>
    </div>
  );
}
