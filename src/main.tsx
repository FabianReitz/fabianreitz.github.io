import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { BetaBanner } from './components/BetaBanner/BetaBanner';
import { Navbar } from './components/Navbar/Navbar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BetaBanner />
    <Navbar />
  </React.StrictMode>
);
