import { SkillsContainer } from '../../components/SkillsContainer/SkillsContainer';
import {
  additionalSkills,
  designSkills,
  softSkills,
  softwareDevelopmentSkills,
} from './skills';

export const SkillsSection = () => {
  return (
    <section id='skills' className='min-h-screen h-fit w-screen'>
      <div className='flex flex-col pt-20'>
        <h2 className='text-5xl mx-auto w-full text-center'>Skills</h2>
        <hr className='w-24 mx-auto my-5 border-[#e91e62] border-2' />
        <h3 className='text-2xl mx-auto opacity-80 text-center'>
          Where are my capabilities and what am I currently learning?
        </h3>
      </div>

      <h4 className='text-2xl mx-auto mt-10 w-full text-center'>
        Software Development
      </h4>
      <SkillsContainer skills={softwareDevelopmentSkills} />

      <h4 className='text-2xl mx-auto mt-10 w-full text-center'>Design</h4>
      <SkillsContainer skills={designSkills} />

      <h4 className='text-2xl mx-auto mt-10 w-full text-center'>
        Additional Skills
      </h4>
      <SkillsContainer skills={additionalSkills} />

      <h4 className='text-2xl mx-auto mt-10 w-full text-center'>Soft Skills</h4>
      <SkillsContainer skills={softSkills} />
    </section>
  );
};
