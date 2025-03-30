import { ProjectCard } from '../../components/ProjectCard/ProjectCard';

export const ProjectsSection = () => {
  return (
    <section id='projects' className='min-h-screen h-fit w-screen'>
      <div className='flex flex-col pt-20'>
        <h2 className='text-5xl mx-auto w-full text-center'>Projects</h2>
        <hr className='w-24 mx-auto my-5 border-[#e91e62] border-2' />
        <h3 className='text-2xl mx-auto opacity-80 text-center'>
          What have I been working on?
        </h3>
      </div>

      <div className='flex flex-row justify-evenly pt-10 w-full md:w-5/6 flex-wrap mx-auto gap-5'>
        <div>
          <ProjectCard
            title='Old dusty University Projects'
            subtitle='I will deny their existence if asked'
            image='./img/old-papers.png'
            imageAlt='A stack of old dusty papers'
            description='Pretty much what you would expect. A Java program here, a Python script there. Some of them were developed for stadt.werk during my dual studies.'
            expandedDescription='Most of these projects live in a private repository and are not accessible to the public. And if you could see the code, you would understand why.'
            isOpenSource={false}
            isPublicallyAccessible={false}
            technologies={[
              'Java',
              'Python',
              'JavaScript',
              'TypeScript',
              'Elasticsearch',
            ]}
            redactTechnologies={false}
          />
        </div>
        <div>
          <ProjectCard
            title='Company Communication Core'
            subtitle='C³ for short'
            image='./img/c3.png'
            imageAlt='A dummy screenshot of the C³ UI'
            description='C³ is the center for data and communication for a large company with complex structures and can be described as an intranet on steroids.'
            expandedDescription='I started working on C³ in my earliest days at stadt.werk. This was my entry into web technologies and getting a better understanding of what it is like to work in a team of developers. After a few months, I started working on desk.box. The code and tech stack is proprietary and not accessible to the public, therefore I cannot tell you everything. To find out more, visit the stadt.werk website linked below.'
            isOpenSource={false}
            isPublicallyAccessible={true}
            liveUrl='https://stadtwerk.org/was-wir-machen/'
            redactTechnologies={true}
          />
        </div>
        <div>
          <ProjectCard
            title='desk.box'
            subtitle='The digital office to reduce paper waste'
            image='./img/deskbox.png'
            imageAlt='A dummy screenshot of the desk.box UI'
            description='desk.box is a digital office application that helps companies manage their documents and workflows more efficiently.'
            expandedDescription="I'm working on desk.box since its inception. After I finished my Bachelor thesis, I started working full-time on desk.box as a Backend Developer. I maintain the existing codebase, plan and develop new features and slay the occasional bug. The code and tech stack is proprietary, therefore I cannot tell you everything. To find out more, visit the product website linked below."
            isOpenSource={false}
            isPublicallyAccessible={true}
            liveUrl='https://www.deskbox-office.de/'
            redactTechnologies={true}
            linkText='Product Website'
          />
        </div>
        <div>
          <ProjectCard
            title='HomeLab Server'
            subtitle="The cloud is just someone else's computer"
            image='./img/homelab.png'
            imageAlt='An open server'
            description='I started my HomeLab server as a project in 2023 to learn more about server administration and open source tools.'
            expandedDescription='In 2023, I decided that 20€ per month for a cloud based multiplayer server was too much. So I bought a used desktop PC, installed Debian and started to host my own services for friends and family. Some of the services I host are: CasaOS, Portainer, multiple Minecraft and Satisfactory servers, my HomeAssistant, my Discord Bot called "Heimdall" and a few more. I do not have a public repository for this project, but I am happy to share my experiences and show you around.'
            isOpenSource={false}
            isPublicallyAccessible={false}
            redactTechnologies={false}
            linkText='Blog Post'
            technologies={[
              'Debian',
              'Docker',
              'HomeAssistant',
              'Node.js',
              'Nginx',
            ]}
          />
        </div>
        <div>
          <ProjectCard
            title='HomeAssistant'
            subtitle='Imagine Alexa, but open source and not spying on you'
            image='./img/homeassistant.png'
            imageAlt='An open server'
            description='After moving into my new house, I wanted to embrace the smart home lifestyle. But the thought of Jeffrey listening to my every word was not very appealing.'
            expandedDescription='I started using HomeAssistant to control my coffee machine, as every good developer should. After that, I integrated more and more devices into my Zigbee network, added a wall panel to my hallway and started to integrate more data sources into my dashboards. Of course, I do not have a public repository for this project, but I am happy to share my experiences and show you around. Just hit me up!'
            isOpenSource={false}
            isPublicallyAccessible={false}
            redactTechnologies={false}
            linkText='Blog Post'
            technologies={[
              'HomeAssistan',
              'HACS',
              'Docker',
              'Zigbee',
              'Fully Kiosk',
            ]}
          />
        </div>
      </div>
    </section>
  );
};
