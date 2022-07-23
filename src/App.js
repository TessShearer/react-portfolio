import React from 'react';
import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <section className="header">
        <h1>
          Tess Shearer
        </h1>
        <nav>
          <ul>
            <li>
              About Me
            </li>
            <li>
            Portfolio
            </li>
            <li>
            Resume
            </li>
            <li>
            Contact Me
            </li>
          </ul>
        </nav>
      </section>
      <section className="App">
        <main>
          <About></About>
          <Portfolio></Portfolio>
          <Resume></Resume>
          <Contact></Contact>
        </main>
      </section>
      <section className="footer">

      </section>
    </div>
  );
}

export default App;
