import React from 'react';
import ResumePDF from '../../assets/Resume.pdf'

function Resume() {
  return (
    <section className="my-5 resume">
      <a href={ResumePDF} target="_blank" rel="noreferrer">Download my Resume Here!</a>
      <p>I have experience with HTML, CSS, JavaScript, the full MERN stack, MySQL, Sequelize, and GitHub. </p>
      
    </section>
  );
}

export default Resume;