import React, {useState} from 'react';
import './App.css';
import About from './components/About';
// import Portfolio from './components/Portfolio';
// import Resume from './components/Resume';
// import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [selectedSection, setSelectedSection] = useState("About Me")

  return (
    <div>
     <header className="header">
            <h1>
                Tess Shearer
            </h1>
            <nav>
                <ul>
                    <li className={(selectedSection)==="About Me"?"selected navLink":"navLink"} onClick={setSelectedSection("About Me")}>
                        About Me
                    </li>
                    <li className={(selectedSection)==="About Me"?"selected navLink":"navLink"} onClick={setSelectedSection("About Me")}>
                        Portfolio
                    </li>
                    <li className={(selectedSection)==="About Me"?"selected navLink":"navLink"} onClick={setSelectedSection("About Me")}>
                        Resume
                    </li>
                    <li className={(selectedSection)==="About Me"?"selected navLink":"navLink"} onClick={setSelectedSection("About Me")}>
                        Contact Me
                    </li>
                </ul>
            </nav>
        </header>
      <section className="App">
        <main>
          {selectedSection === "About Me" && <About></About>}
        </main>
      </section>
      <section className="footer">

      </section>
    </div>
  );
}

export default App;
