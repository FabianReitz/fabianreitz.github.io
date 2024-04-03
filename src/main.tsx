import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { AboutMeSection } from './sections/AboutMeSection/AboutMeSection';
import { BetaBanner } from './components/BetaBanner/BetaBanner';
import { HeroSection } from './sections/HeroSection/HeroSection';
import { SkillsSection } from './sections/SkillsSection/SkillsSection';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BetaBanner />
    <HeroSection />
    <AboutMeSection />
    <SkillsSection />
  </React.StrictMode>
);
