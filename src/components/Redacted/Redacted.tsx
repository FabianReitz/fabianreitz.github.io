import { dummyWords } from './dummyWords';

interface RedactedProps {
  wordCount: number;
  className?: string;
}
export const Redacted = (props: RedactedProps) => {
  const randomDummyWords = dummyWords
    .sort(() => Math.random() - 0.5)
    .slice(0, props.wordCount);

  return (
    <div className={props.className}>
      {randomDummyWords.map((word, index) => (
        <span
          key={index}
          className='blur-[5px] cursor-default select-none text-xs bg-black bg-opacity-50 rounded-md px-2 py-1'
        >
          {word}{' '}
        </span>
      ))}
    </div>
  );
};
