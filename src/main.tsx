import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { BetaBanner } from './components/BetaBanner/BetaBanner';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BetaBanner />
    <Navbar />
    <Hero />
  </React.StrictMode>
);
