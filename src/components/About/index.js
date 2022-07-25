import React from 'react';
import selfPortrait from '../../assets/images/self.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={selfPortrait} className="self-portrait" alt="self portrait" />
      <p className="bio">My name is Tess Shearer. I graduated in with a Bachelor's Degree in Communication Disorders from Brigham Young University in 2021. I am graduating with a certificate in full stack development from the University of Utah this August. I have experience with HTML, CSS, GitHub, JavaScript, React, Node, Express, and Mongoose.</p>
    </section>
  );
}

export default About;