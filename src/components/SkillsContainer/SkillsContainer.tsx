import { useState } from 'react';
import { Skill, SoftSkill } from '../../types/Skill';
import { SkillCard } from '../SkillCard/SkillCard';

interface SkillsContainerProps {
  name: string;
  skills: SoftSkill[] | Skill[];
}

export const SkillsContainer = (props: SkillsContainerProps) => {
  const defaultSkillSize = 6;

  const [isExpanded, setIsExpanded] = useState(false);
  const displayLimit = isExpanded ? props.skills.length : defaultSkillSize;

  return (
    <>
      <div className='pt-5 mx-auto max-w-[950px] px-5 flex justify-center flex-wrap gap-4'>
        {props.skills.slice(0, displayLimit).map((skill) => {
          return (
            <SkillCard
              key={skill.title}
              title={skill.title}
              skillLevelPercent={(skill as Skill)?.skillLevelPercent}
              icon={skill.icon}
            />
          );
        })}
      </div>
      <div className='pt-5 mx-auto max-w-[950px] px-5 flex justify-center flex-wrap gap-4'>
        {props.skills.length > defaultSkillSize && (
          <button
            className='text-cyan-500 text-lg hover:text-cyan-400 transition-all'
            onClick={() => setIsExpanded(!isExpanded)}
            data-umami-event={
              isExpanded
                ? `skills-show-less-${props.name}`
                : `skills-show-more-${props.name}`
            }
          >
            {isExpanded ? 'Less' : 'More'}
          </button>
        )}
      </div>
    </>
  );
};
