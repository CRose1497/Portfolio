import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Import FontAwesome library and icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(faLinkedin, faGithub);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
