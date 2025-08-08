import React from 'react';
import "../App.css";
import ContactForm from './ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-content-wrapper">
        <h2 className="contact-heading">Contact Me</h2>

        <div className="contact-info">
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:thangaprabha362005@gmail.com">thangaprabha362005@gmail.com</a>
          </p>
          <p><strong>Phone:</strong> 7904868513</p>
          <p>
            <a
              href="https://www.linkedin.com/in/thanga-prabha-b-7333552a1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            <br />
            <a
              href="https://github.com/ThangaPrabha03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </p>
        </div>

        <hr className="divider" />

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
