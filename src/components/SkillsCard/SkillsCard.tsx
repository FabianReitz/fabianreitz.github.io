import { ReactElement } from 'react';

import { SkillIndicator } from '../SkillIndicator/SkillIndicator';

interface SkillsCardProps {
  title: string;
  image: ReactElement;
  skillLevelPercent: number;
}

export const SkillsCard = (props: SkillsCardProps) => {
  return (
    <div className='h-[64px] w-[256px] bg-[#e91e62] bg-opacity-75 rounded-lg flex'>
      <div className='my-auto mx-4'>{props.image}</div>
      <div className='my-auto flex flex-col'>
        <h4 className='text-xl my-auto pb-1'>{props.title}</h4>
        <SkillIndicator skillLevelPercent={props.skillLevelPercent} />
      </div>
    </div>
  );
};
