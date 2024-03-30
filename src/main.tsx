import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { AboutMeSection } from './sections/AboutMeSection/AboutMeSection';
import { BetaBanner } from './components/BetaBanner/BetaBanner';
import { HeroSection } from './sections/HeroSection/HeroSection';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BetaBanner />
    <HeroSection />
    <AboutMeSection />
  </React.StrictMode>
);
