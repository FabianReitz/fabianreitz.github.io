import { useEffect, useState } from 'react';
import { Redacted } from '../Redacted/Redacted';
interface ProjectCardProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  description: string;
  expandedDescription: string;
  isOpenSource: boolean;
  repositoryUrl?: string;
  isPublicallyAccessible: boolean;
  liveUrl?: string;
  technologies?: string[];
  redactTechnologies: boolean;
  linkText?: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [redactedTechnologies, setRedactedTechnologies] = useState(null);

  useEffect(() => {
    if (!props.redactTechnologies) return;

    setRedactedTechnologies(
      <Redacted
        wordCount={Math.floor(Math.random() * 4) + 2}
        className='mx-4'
      />
    );
  }, [props.redactTechnologies]);

  return (
    <div className='w-96 bg-black bg-opacity-30 rounded-lg py-5 flex flex-col gap-3 min-h-[570px]'>
      <div>
        <p className='mx-4 text-lg'>{props.title}</p>
        <p className='mx-4 text-xs opacity-75'>{props.subtitle}</p>
      </div>
      <div>
        <div className='h-[210px]'>
          <hr className='border-[#e91e62] border-2' />
          <img src={props.image} className='w-full h-full object-cover' />
        </div>
      </div>
      <div>
        <p className='mx-4'>{props.description}</p>
      </div>
      <button
        className='text-cyan-500 text-sm hover:text-cyan-400 transition-all'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Less' : 'More'}
      </button>

      {isExpanded ? (
        <div className='mx-4 bg-black bg-opacity-50 rounded-md p-2'>
          <div className='text-sm'>{props.expandedDescription}</div>
        </div>
      ) : (
        <></>
      )}
      <div>
        {props.redactTechnologies ? (
          redactedTechnologies
        ) : (
          <div className='mx-4 flex flex-wrap gap-2'>
            {props.technologies?.map((technology) => (
              <span
                key={technology}
                className='text-xs bg-black bg-opacity-50 rounded-md px-2 py-1'
              >
                {technology}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className='flex gap-4 px-5 mt-auto'>
        {props.isOpenSource ? (
          <button
            onClick={() => window.open(props.repositoryUrl, '_blank').focus()}
            className='text-cyan-500 text-sm hover:text-cyan-400 transition-all'
          >
            Repository
          </button>
        ) : (
          <button
            onClick={() => window.open(props.repositoryUrl, '_blank').focus()}
            className='text-cyan-500 text-sm opacity-30'
            disabled
          >
            Repository
          </button>
        )}
        {props.isPublicallyAccessible ? (
          <button
            onClick={() => window.open(props.liveUrl, '_blank').focus()}
            className='text-cyan-500 text-sm hover:text-cyan-400 transition-all'
            data-umami-event={
              'projects-' +
              props.title.toLowerCase().replace(/\s+/g, '-') +
              '-website'
            }
          >
            {props.linkText || 'Website'}
          </button>
        ) : (
          <button
            onClick={() => window.open(props.liveUrl, '_blank').focus()}
            className='text-cyan-500 text-sm opacity-30'
            disabled
          >
            {props.linkText || 'Website'}
          </button>
        )}
      </div>
    </div>
  );
};
