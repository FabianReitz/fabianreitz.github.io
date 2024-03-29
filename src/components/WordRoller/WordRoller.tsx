import { useEffect, useRef, useState } from 'react';

interface IProps {
  words: string[];
}

export const WordRoller = (props: IProps) => {
  const [currentWord, setCurrentWord] = useState(props.words[0]);

  const index = useRef(0);
  useEffect(() => {
    let interval: number | undefined = undefined;

    interval = setInterval(() => {
      index.current++;
      setCurrentWord(props.words[index.current]);
      if (index.current === props.words.length - 1) {
        index.current = -1;
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  return <span className='text-[#e91e62]'>{currentWord}</span>;
};
