import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

type JournalEntryProps = {
  answer: string;
};

const JournalAnswer = ({ answer }: JournalEntryProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div
        className={`prose dark:prose-invert max-w-none transition-all duration-300 ${expanded ? '' : 'line-clamp-4'}`}
      >
        <ReactMarkdown>{answer}</ReactMarkdown>
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className='mt-2 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400'
      >
        {expanded ? 'Show less' : 'Read more'}
      </button>
    </div>
  );
};

export default JournalAnswer;
