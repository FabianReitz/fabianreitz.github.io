import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AboutMeSection } from './sections/AboutMeSection/AboutMeSection';
import { HeroSection } from './sections/HeroSection/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection/SkillsSection';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeroSection />
    <AboutMeSection />
    <SkillsSection />
    <ProjectsSection />
  </React.StrictMode>
);
