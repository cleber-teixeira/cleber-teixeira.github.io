import React from 'react';

import './Skills.css';

const basic = 'Júnior';
const intermediate = 'Pleno';
const advanced = 'Sênior';

class Skills extends React.Component {
  render() {
    return (
      <section id="skills">
        <h1>Habilidades:</h1>
        <h3>Desenvolvedor Front-End</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step">{ intermediate }</div>
          <div className="step">{ advanced }</div>
        </div>

        <h3>Desenvolvedor Back-End</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step">{ intermediate }</div>
          <div className="step">{ advanced }</div>
        </div>

        <h3>Desenvolvedor Full-Stack</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step ">{ intermediate }</div>
          <div className="step">{ advanced }</div>
        </div>

        <h3>Soft-Skills</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step complete">{ intermediate }</div>
          <div className="step">{ advanced }</div>
        </div>

        <h3>Vontade de continuar evoluindo</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step complete">{ intermediate }</div>
          <div className="step complete">{ advanced }</div>
        </div>
      </section>
    );
  }
}

export default Skills;
