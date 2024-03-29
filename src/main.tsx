import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { BetaBanner } from './components/BetaBanner/BetaBanner';
import { Hero } from './components/Hero/Hero';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BetaBanner />
    <Hero />
  </React.StrictMode>
);
