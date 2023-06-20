import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <section id="home">
      <h1>Bienvenue sur mon Portfolio</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sem vel turpis tempus congue in et est.</p>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sem vel turpis tempus congue in et est.</p>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sem vel turpis tempus congue in et est.</p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sem vel turpis tempus congue in et est.</p>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
