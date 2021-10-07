import './style.css';
import React from 'react';
import PersonalInfo from '../PersonalInfo';
import Skills from '../Skills';


class AboutMe extends React.Component {
  render() {
    return (
      <section id="about-me">
        <PersonalInfo />
        <Skills />
      </section>
    );
  }
}

export default AboutMe;
