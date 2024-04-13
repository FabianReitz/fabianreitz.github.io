import { Skill } from '../../types/Skill';
import { SkillsCard } from '../../components/SkillsCard/SkillsCard';
import { skills } from './skills';

export const SkillsSection = () => {
  const skillsByCategory: Record<string, Skill[]> = skills.reduce(
    (acc, skill) => {
      if (acc[skill.category]) {
        acc[skill.category].push(skill);
      } else {
        acc[skill.category] = [skill];
      }
      return acc;
    },
    {} as Record<string, Skill[]>
  );

  return (
    <section id='skills' className='h-screen w-full'>
      <div className='flex flex-col pt-20'>
        <h2 className='text-5xl mx-auto w-full text-center'>Skills</h2>
        <hr className='w-24 mx-auto my-5 border-[#e91e62] border-2' />
        <h3 className='text-2xl mx-auto opacity-80'>
          Where are my capabilities and what am I currently learning?
        </h3>
      </div>

      {Object.keys(skillsByCategory).map((category) => {
        return (
          <>
            <h4 className='text-2xl mx-auto mt-10 w-full text-center'>
              {category}
            </h4>
            <div className='pt-5 px-72 flex justify-center flex-wrap gap-4'>
              {skillsByCategory[category].map((skill) => {
                return (
                  <SkillsCard
                    title={skill.title}
                    skillLevelPercent={skill.skillLevelPercent}
                    icon={skill.icon}
                  />
                );
              })}
            </div>
          </>
        );
      })}
    </section>
  );
};
