import { BetaBanner } from '../components/BetaBanner/BetaBanner';
import { AboutMeSection } from '../sections/AboutMeSection/AboutMeSection';
import { HeroSection } from '../sections/HeroSection/HeroSection';
import { SkillsSection } from '../sections/SkillsSection/SkillsSection';

export const Root = () => {
  return (
    <>
      <BetaBanner />
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
    </>
  );
};
