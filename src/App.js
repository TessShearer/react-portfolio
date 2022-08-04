import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [selectedSection, setSelectedSection] = useState("About Me");

  return (
    <div>
      <header className="header">
        <h1>
          Tess Shearer
        </h1>
        <Nav selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      </header>
      <section className="App">
        <main>
          {selectedSection === "About Me" && <About></About>}
          {selectedSection === "Portfolio" && <Portfolio></Portfolio>}
          {selectedSection === "Resume" && <Resume></Resume>}
          {selectedSection === "Contact" && <Contact></Contact>}
        </main>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
