import React from 'react';
import profileImg from '../images/cleber.jpg';
import githubIcon from '../images/github1.png';

import './PersonalInfo.css';

class PersonalInfo extends React.Component {
  render() {
    return (
      <aside id="personal-info">
        <img src={ profileImg } alt="Foto Cleber Teixeira" className="img-profile" />

        <h2>Cleber Lopes Teixeira</h2>

        <p>Moro em: <span>São Paulo/SP</span> | Natural de: <span>Fortaleza-CE</span></p>

        <p>
          <a href="https://github.com/cleber-teixeira" target="_blank" rel="noopener noreferrer">
            <img src={ githubIcon } alt="GitHub" className="img-github" />
          </a>
        </p>
        
        <p className="sobre">
          Sou apaixonado por <span><em>tecnologia</em></span>, música, natureza e <span>esportes</span> (principalmente <span><em>artes-marciais</em></span>). Atualmente sou aluno do curso de <span>Desenvolvimento Web Full Stack da <a href="https://www.betrybe.com/" target="_blank" >Trybe</a> - <em>Turma 09</em>.</span> Estou me preparando para ser um profissional exemplar e <em>fazer a diferença na vida das pessoas!</em>
        </p>
      </aside>
    );
  }
}

export default PersonalInfo;
