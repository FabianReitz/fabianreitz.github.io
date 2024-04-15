import { useEffect, useRef, useState } from 'react';

interface WordRollerProps {
  words: string[];
}

export const WordRoller = (props: WordRollerProps) => {
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
    }, 1900);

    return () => clearInterval(interval);
  });

  return <span className='text-[#e91e62]'>{currentWord}</span>;
};
