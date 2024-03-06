import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Function to handle smooth scrolling when clicking on anchor links
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    };

    // Attach event listeners to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup function to remove event listeners
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h1>Home Section</h1>
          <p>Welcome to our website!</p>
        </section>
        <section id="about">
          <h2>About Us</h2>
          <p>Learn more about our company...</p>
        </section>
        <section id="services">
          <h2>Our Services</h2>
          <p>Discover what we offer...</p>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Get in touch with us...</p>
        </section>
      </main>
      <footer>
        <p>© 2024 Your Company</p>
      </footer>
    </div>
  );
}

export default App;
