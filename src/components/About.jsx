import React from 'react';
import "../App.css";
import image1 from '../assets/image1.jpg';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faComments,
  faUserTie,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faPhp,
  faPython,
  faJava,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div>

      <main>
        <section className="about-section">
  <div className="about-left">
    <h1>THANGA PRABHA B</h1>
    <br />
    <h4>
      An enthusiastic and motivated student with a passion for learning and a drive for academic excellence.
To obtain a challenging position in a reputable organization where I can enhance my skills, contribute to the growth of the company, and build a long-term career using my knowledge in software development and problem-solving.
    </h4>
    <br />

    <h3>Education Details</h3><br />
    <ul>
      <li><strong>B.E. Computer Science</strong><br />University College of Engineering Nagercoil<br />Currently in 6th semester, CGPA: 8.33</li>
      <li><strong>HSC</strong><br />CAMBRIDGE MHS - AGASTHIYARPATTI - 86.7%</li><br />
      <li><strong>SSLC</strong><br />VIKAASA SCHOOL AMBASAMUDRAM - 73.7%</li><br />
    </ul>
  </div>


  <div className="about-image">
    <img src={image1} alt="Thanga Prabha" />
  </div>


 <div className="about-right">
  <div className="skill-list">
    <h3>Skills</h3>
    <div className="skill-grid">
      <div className="skill-item"><FontAwesomeIcon icon={faHtml5} /> HTML</div>
      <div className="skill-item"><FontAwesomeIcon icon={faCss3Alt} /> CSS</div>
      <div className="skill-item"><FontAwesomeIcon icon={faJs} /> JavaScript</div>
      <div className="skill-item"><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</div>
      <div className="skill-item"><FontAwesomeIcon icon={faPhp} /> PHP</div>
      <div className="skill-item"><FontAwesomeIcon icon={faDatabase} /> MySQL</div>
      <div className="skill-item"><FontAwesomeIcon icon={faPython} /> Python</div>
      <div className="skill-item"><FontAwesomeIcon icon={faJava} /> Java</div>
      <div className="skill-item"><FontAwesomeIcon icon={faComments} /> Communication</div>
      <div className="skill-item"><FontAwesomeIcon icon={faUserTie} /> Leadership</div>
      <div className="skill-item"><FontAwesomeIcon icon={faClock} /> Time Management</div>
    </div>
  </div>
</div>

</section>

      </main>

      <footer>
        <a href="https://www.linkedin.com/in/thanga-prabha-b-7333552a1/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/ThangaPrabha03" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </footer>
    </div>
  );
};

export default About;
