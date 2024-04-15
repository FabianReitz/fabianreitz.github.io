export type SoftSkill = {
  title: string;
  category: string;
  tags: string[];
  description: string;
  icon: JSX.Element;
};
export type Skill = SoftSkill & {
  skillLevelPercent: number;
  projects: string[];
  isFavorite?: boolean;
};
