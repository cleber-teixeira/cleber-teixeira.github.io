import './style.css';
import React from 'react';
import project_01 from '../../images/lessons_learned.png';
import project_02 from '../../images/pixels_arts.png';
import project_03 from '../../images/to_do_list.png';
import project_04 from '../../images/color_guess.png';
import project_05 from '../../images/facebook_signup.png';
import project_06 from '../../images/shopping_cart.png';
import project_07 from '../../images/bingo_asvsb.png';

class Projects extends React.Component {
  render() {
    return (
      <section id="projects">
        <ul>
          <a href="https://cleber-teixeira.github.io/projetos/bingo-asvsb/" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ project_07 } alt="Imagem do Projeto 6" />
              <h3>Bingo Beneficente</h3>
              <p>
                Projeto realizado de forma voluntária à <b>Associação Saber Viver Sempre Bem</b>, uma associação sem fins lucrativos que ajudam pessoas carentes na Zona Leste de São Paulo.<br />
                Elaborei este projeto usando os conhecimentos de Fundamentos da Trybe: JavaScript, HTML e CSS.
              </p>
            </li>
          </a>
          <a href="https://cleber-teixeira.github.io/projetos/lessons-learned/" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ project_01 } alt="Imagem do Projeto 1" />
              <h3>Lessons Learned</h3>
              <p>
                Projeto realizado no bloco 03 da Trybe: Introdução à HTML e CSS.<br />
                Módulo: Fundamentos do Desenvolvimento Web
              </p>
            </li>
          </a>
          <a href="https://cleber-teixeira.github.io/projetos/pixels-art/" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ project_02} alt="Imagem do Projeto 2" />
              <h3>Pixels Arts</h3>
              <p>
                Projeto realizado no bloco 05 da Trybe: JavaScript - DOM, Eventos e Web Storage.<br />
                Módulo: Fundamentos do Desenvolvimento Web
              </p>
            </li>
          </a>
          <a href="https://cleber-teixeira.github.io/projetos/todo-list/" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ project_03 } alt="Imagem do Projeto 3" />
              <h3>To Do List</h3>
              <p>
                Projeto realizado no bloco 05 da Trybe: JavaScript - DOM, Eventos e Web Storage.<br />
                Módulo: Fundamentos do Desenvolvimento Web
              </p>
            </li>
          </a>
          <a href="https://cleber-teixeira.github.io/projetos/color-guess/" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ project_04 } alt="Imagem do Projeto 4" />
              <h3>Color Guess</h3>
              <p>
                Projeto realizado no bloco 05 da Trybe: JavaScript - DOM, Eventos e Web Storage.<br />
                Módulo: Fundamentos do Desenvolvimento Web
              </p>
            </li>
          </a>
          <a href="https://cleber-teixeira.github.io/projetos/facebook-signup/" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ project_05 } alt="Imagem do Projeto 5" />
              <h3>Facebook Signup</h3>
              <p>
                Projeto realizado no bloco 06 da Trybe: HTML e CSS - Forms, Flexbox e Responsivo.<br />
                Módulo: Fundamentos do Desenvolvimento Web
              </p>
            </li>
          </a>
          <a href="https://cleber-teixeira.github.io/projetos/shopping-cart/" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ project_06 } alt="Imagem do Projeto 6" />
              <h3>Shopping Cart</h3>
              <p>
                Projeto realizado no bloco 09 da Trybe: JavaScript e Testes Assíncronos.<br />
                Módulo: Fundamentos do Desenvolvimento Web
              </p>
            </li>
          </a>
        </ul>
      </section>
    );
  }
}

export default Projects;
