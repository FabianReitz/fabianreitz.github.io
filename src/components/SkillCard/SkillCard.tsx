import { ReactElement } from 'react';

import { SkillIndicator } from '../SkillIndicator/SkillIndicator';

interface SkillCardProps {
  title: string;
  icon: ReactElement;
  skillLevelPercent?: number;
  className?: string;
}

export const SkillCard = (props: SkillCardProps) => {
  return (
    <div className='h-16 w-72 bg-[#e91e62] bg-opacity-75 rounded-lg flex'>
      <div className='my-auto mx-4'>{props.icon}</div>
      <div className='my-auto flex flex-col w-44'>
        <h4 className='text-xl my-auto pb-1'>{props.title}</h4>
        <SkillIndicator skillLevelPercent={props.skillLevelPercent} />
      </div>
    </div>
  );
};
