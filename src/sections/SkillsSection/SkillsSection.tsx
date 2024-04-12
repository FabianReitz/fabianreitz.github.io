import { DiScrum } from 'react-icons/di';
import {
  FaAngular,
  FaCss3,
  FaFigma,
  FaFolderOpen,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaPassport,
  FaPeopleArrows,
  FaReact,
  FaSass,
  FaServer,
  FaSlack,
  FaThumbsUp,
} from 'react-icons/fa';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { MdConveyorBelt, MdDesignServices, MdHttp } from 'react-icons/md';
import {
  SiAdobexd,
  SiConfluence,
  SiDigitalocean,
  SiElasticsearch,
  SiExpress,
  SiGnubash,
  SiJavascript,
  SiJest,
  SiJira,
  SiMacos,
  SiMaterialdesign,
  SiMicrosoftoffice,
  SiMongodb,
  SiNestjs,
  SiNotion,
  SiNx,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
  SiWindows,
} from 'react-icons/si';

import { SkillsCard } from '../../components/SkillsCard/SkillsCard';

export const SkillsSection = () => {
  return (
    <section id='skills' className='h-screen w-full'>
      <div className='flex flex-col pt-20'>
        <h2 className='text-5xl mx-auto w-full text-center'>Skills</h2>
        <hr className='w-24 mx-auto my-5 border-[#e91e62] border-2' />
        <h3 className='text-2xl mx-auto opacity-80'>
          Where are my capabilities and what am I currently learning?
        </h3>
      </div>

      <h4 className='text-2xl mx-auto mt-10 w-full text-center'>
        Software Development
      </h4>
      <div className='pt-5 px-72 flex justify-center flex-wrap gap-4'>
        <SkillsCard
          title='HTML'
          skillLevelPercent={90}
          image={<FaHtml5 className='h-10 w-10' />}
        />
        <SkillsCard
          title='CSS'
          skillLevelPercent={75}
          image={<FaCss3 className='h-10 w-10' />}
        />
        <SkillsCard
          title='JavaScript'
          skillLevelPercent={95}
          image={<SiJavascript className='h-10 w-10' />}
        />
        <SkillsCard
          title='SASS/SCSS/LESS'
          skillLevelPercent={65}
          image={<FaSass className='h-10 w-10' />}
        />
        <SkillsCard
          title='Tailwind CSS'
          skillLevelPercent={45}
          image={<SiTailwindcss className='h-10 w-10' />}
        />
        <SkillsCard
          title='Node.js'
          skillLevelPercent={95}
          image={<FaNodeJs className='h-10 w-10' />}
        />
        <SkillsCard
          title='TypeScript'
          skillLevelPercent={95}
          image={<SiTypescript className='h-10 w-10' />}
        />
        <SkillsCard
          title='Angular'
          skillLevelPercent={10}
          image={<FaAngular className='h-10 w-10' />}
        />
        <SkillsCard
          title='React'
          skillLevelPercent={70}
          image={<FaReact className='h-10 w-10' />}
        />
        <SkillsCard
          title='React Native'
          skillLevelPercent={60}
          image={<IoPhonePortraitOutline className='h-10 w-10' />}
        />
        <SkillsCard
          title='Express.js'
          skillLevelPercent={20}
          image={<SiExpress className='h-10 w-10' />}
        />
        <SkillsCard
          title='Nest.js'
          skillLevelPercent={85}
          image={<SiNestjs className='h-10 w-10' />}
        />
        <SkillsCard
          title='RxJS'
          skillLevelPercent={15}
          image={<MdConveyorBelt className='h-10 w-10' />}
        />
        <SkillsCard
          title='Unit Testing'
          skillLevelPercent={50}
          image={<SiJest className='h-10 w-10' />}
        />
        <SkillsCard
          title='MongoDB'
          skillLevelPercent={70}
          image={<SiMongodb className='h-10 w-10' />}
        />
        <SkillsCard
          title='Elasticsearch'
          skillLevelPercent={20}
          image={<SiElasticsearch className='h-10 w-10' />}
        />
        <SkillsCard
          title='SQL'
          skillLevelPercent={5}
          image={<SiPostgresql className='h-10 w-10' />}
        />
        <SkillsCard
          title='Redis'
          skillLevelPercent={10}
          image={<SiRedis className='h-10 w-10' />}
        />
        <SkillsCard
          title='Nx'
          skillLevelPercent={85}
          image={<SiNx className='h-10 w-10' />}
        />
        <SkillsCard
          title='VSCode'
          skillLevelPercent={100}
          image={<SiVisualstudiocode className='h-10 w-10' />}
        />
        <SkillsCard
          title='Bash'
          skillLevelPercent={85}
          image={<SiGnubash className='h-10 w-10' />}
        />
        <SkillsCard
          title='git'
          skillLevelPercent={80}
          image={<FaGitAlt className='h-10 w-10' />}
        />
        <SkillsCard
          title='Code Review'
          skillLevelPercent={80}
          image={<FaThumbsUp className='h-10 w-10' />}
        />
      </div>

      <h4 className='text-2xl mx-auto mt-10 w-full text-center'>Design</h4>
      <div className='pt-5 px-72 flex justify-center flex-wrap gap-4'>
        <SkillsCard
          title='UI/UX Design'
          skillLevelPercent={85}
          image={<MdDesignServices className='h-10 w-10' />}
        />
        <SkillsCard
          title='Material Design'
          skillLevelPercent={90}
          image={<SiMaterialdesign className='h-10 w-10' />}
        />
        <SkillsCard
          title='Figma'
          skillLevelPercent={95}
          image={<FaFigma className='h-10 w-10' />}
        />
        <SkillsCard
          title='Adobe XD'
          skillLevelPercent={30}
          image={<SiAdobexd className='h-10 w-10' />}
        />
      </div>

      <h4 className='text-2xl mx-auto mt-10 w-full text-center'>
        Infrastructure
      </h4>
      <div className='pt-5 px-72 flex justify-center flex-wrap gap-4'>
        <SkillsCard
          title='GitHub'
          skillLevelPercent={90}
          image={<FaGithub className='h-10 w-10' />}
        />
        <SkillsCard
          title='Keycloak'
          skillLevelPercent={15}
          image={<FaPassport className='h-10 w-10' />}
        />
        <SkillsCard
          title='Alfresco'
          skillLevelPercent={50}
          image={<FaFolderOpen className='h-10 w-10' />}
        />
        <SkillsCard
          title='DigitalOcean'
          skillLevelPercent={80}
          image={<SiDigitalocean className='h-10 w-10' />}
        />
      </div>

      <h4 className='text-2xl mx-auto mt-10 w-full text-center'>
        Additional Skills
      </h4>
      <div className='pt-5 px-72 flex justify-center flex-wrap gap-4'>
        <SkillsCard
          title='REST API'
          skillLevelPercent={70}
          image={<MdHttp className='h-10 w-10' />}
        />
        <SkillsCard
          title='WebSockets'
          skillLevelPercent={45}
          image={<FaPeopleArrows className='h-10 w-10' />}
        />
        <SkillsCard
          title='SSE'
          skillLevelPercent={50}
          image={<FaServer className='h-10 w-10' />}
        />
        <SkillsCard
          title='MacOS'
          skillLevelPercent={100}
          image={<SiMacos className='h-10 w-10' />}
        />
        <SkillsCard
          title='Linux'
          skillLevelPercent={85}
          image={<FaLinux className='h-10 w-10' />}
        />
        <SkillsCard
          title='Windows'
          skillLevelPercent={95}
          image={<SiWindows className='h-10 w-10' />}
        />
        <SkillsCard
          title='Microsoft Office'
          skillLevelPercent={100}
          image={<SiMicrosoftoffice className='h-10 w-10' />}
        />
        <SkillsCard
          title='Scrum'
          skillLevelPercent={85}
          image={<DiScrum className='h-10 w-10' />}
        />
        <SkillsCard
          title='Jira'
          skillLevelPercent={90}
          image={<SiJira className='h-10 w-10' />}
        />
        <SkillsCard
          title='Confluence'
          skillLevelPercent={95}
          image={<SiConfluence className='h-10 w-10' />}
        />
        <SkillsCard
          title='Notion'
          skillLevelPercent={90}
          image={<SiNotion className='h-10 w-10' />}
        />
        <SkillsCard
          title='Slack'
          skillLevelPercent={50}
          image={<FaSlack className='h-10 w-10' />}
        />
      </div>
      <h4 className='text-2xl mx-auto mt-10 w-full text-center'>Soft Skills</h4>
      <div className='pt-5 px-72 flex justify-center flex-wrap gap-4'>
        <SkillsCard
          title='Teamwork'
          skillLevelPercent={90}
          image={<FaHtml5 className='h-10 w-10' />}
        />
        <SkillsCard
          title='Communication'
          skillLevelPercent={95}
          image={<FaCss3 className='h-10 w-10' />}
        />
        <SkillsCard
          title='Problem Solving'
          skillLevelPercent={95}
          image={<FaJs className='h-10 w-10' />}
        />
        <SkillsCard
          title='Responsibility'
          skillLevelPercent={90}
          image={<FaJs className='h-10 w-10' />}
        />
        <SkillsCard
          title='Independent Work'
          skillLevelPercent={95}
          image={<FaJs className='h-10 w-10' />}
        />
        <SkillsCard
          title='Application Design'
          skillLevelPercent={95}
          image={<FaJs className='h-10 w-10' />}
        />
        <SkillsCard
          title='German Language'
          skillLevelPercent={100}
          image={<FaJs className='h-10 w-10' />}
        />
        <SkillsCard
          title='English Language'
          skillLevelPercent={90}
          image={<FaJs className='h-10 w-10' />}
        />
        <SkillsCard
          title='Learning Capacity'
          skillLevelPercent={95}
          image={<FaJs className='h-10 w-10' />}
        />
      </div>
    </section>
  );
};
