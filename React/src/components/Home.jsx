import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link id="one" to="/">Home</Link>
        </li>
        <li>
          <Link id="two" to="/about">About</Link>
        </li>
        <li>
          <Link  id="three"to="/service">Services</Link>
        </li>
        <li>
          <Link id="four" to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Home;
