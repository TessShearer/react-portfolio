import React from 'react';
import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <Nav>
      </Nav>
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
