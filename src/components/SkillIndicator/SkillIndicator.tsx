interface SkillIndicatorProps {
  skillLevelPercent: number;
}

export const SkillIndicator = (props: SkillIndicatorProps) => {
  return (
    <div className='flex bg-slate-300 rounded-full px-1.5'>
      <div className='pixel-font text-xs mr-1 text-blue-700'>EXP</div>
      <div className='rounded-full w-40 h-2 my-auto bg-black bg-opacity-45'>
        <div
          style={{ width: props.skillLevelPercent + '%' }}
          className='rounded-full bg-cyan-500 h-2'
        />
      </div>
    </div>
  );
};
