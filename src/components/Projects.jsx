import React from 'react';
import "../App.css";


const Projects = () => {
  return (
    <section className="project-section">
      <div className="container">
        <h1>PROJECTS</h1>
        <hr />

        <h3>Electro World</h3>
        <p>
          Frontend web development using HTML and CSS. Creating an electronics web development page using HTML and CSS involves designing a user-friendly interface to display electronics options and shopping details. HTML structures the content while CSS styles it for an engaging and responsive user experience.
        </p>

        <h3>Online Food Delivery System</h3>
        <p>
          Designed and developed an "Online Food Delivery System" using HTML, CSS, JavaScript, PHP, and SQL. Implemented features like secure registration, real-time tracking, and payment integration. Enhanced user convenience and streamlined restaurant operations through a scalable web platform.
        </p>

        <h3>Employee Leave Application</h3>
        <p>
          Developed a web-based Employee Leave Management System using PHP and MySQL, enabling employees to apply for leave online. Designed an admin panel for leave approval, employee management, and status tracking. Implemented file upload features and authentication for secure access.
        </p>

        <h3>Emotion Detection</h3>
        <p>
          Built an Emotion Detection system using facial expressions and voice analysis. Used Mini-XCEPTION for facial emotion recognition and Whisper with SVM. Enabled accurate multimodal emotion detection for enhanced user interaction.
        </p>
        <h3>Quiz API App</h3>
        <p>A dynamic quiz application built with React JS that fetches questions from an external API, displays multiple-choice questions, and tracks scores in real-time</p>

        <h3>Pet Adoption Blog</h3>
        <p>A React-based blog showcasing adoptable pets with categories, stories, and detailed pet profiles, helping users connect with their future furry companions.</p>
        <h3>FAQ App</h3>
        <p>An interactive FAQ (Frequently Asked Questions) app in React JS where users can expand or collapse answers to common queries, improving user engagement and support</p>
        <h3>Weather App</h3>
        <p>A sleek React JS weather application that fetches real-time weather data using an API, displaying current conditions, temperature, and forecasts based on the user's location or search</p>
      </div>
    </section>
  );
};

export default Projects;
