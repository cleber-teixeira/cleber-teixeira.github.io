import React from 'react';
import profileImg from '../images/cleber.jpg';
import githubIcon from '../images/github1.png';
import linkedinIcon from '../images/linkedin.png';

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
            <img src={ githubIcon } alt="Ícone do GitHub" className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/cleberlopesteixeira/" target="_blank" rel="noopener noreferrer">
            <img src={ linkedinIcon } alt="Ícone do Linkedin" className="icon" />
          </a>
        </p>

        <p className="sobre">
          Sou apaixonado por tecnologia, música, natureza e esportes (principalmente artes-marciais). Me formei como <span>Desenvolvedor Web Full Stack pela <a href="https://www.betrybe.com/" target="_blank" >Trybe</a> - <em>Turma 09</em>.</span> Atualmente estou aberto à oportunidades como desenvolvedor júnior, onde pretendo continuar evoluindo e me preparando para ser um profissional exemplar e <em>fazer a diferença na vida das pessoas!</em>
        </p>
      </aside>
    );
  }
}

export default PersonalInfo;
