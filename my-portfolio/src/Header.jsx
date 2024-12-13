import React from 'react';
import { Link } from 'react-router-dom';

// Header component
const Header = () => (
  <header>
    <h1>Christian Rose</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
