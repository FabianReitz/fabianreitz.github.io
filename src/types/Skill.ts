export type Skill = {
  title: string;
  category: string;
  skillLevelPercent?: number;
  description: string;
  projects?: string[];
  tags: string[];
  icon: JSX.Element;
};
