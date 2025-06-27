import { FormEvent, useState } from 'react';
import data from '../../mock.json';
import { cn } from '../../utils';
import x from '../../assets/x.svg';
import check from '../../assets/check.svg';

type Quiz = {
  id: string;
  question: string;
  options: Option[];
  isSubmitted: boolean;
};

type Option = {
  id: string;
  answer: string;
  isCorrect: boolean;
};

type UserAnswer = {
  questionId: string;
  selectedOptionId: string;
  correctOption: Option;
  isCorrect: boolean;
  answer: string;
};

function Quizzes() {
  const mockData: Quiz[] = data;

  const [selectedQuestion, setSelectedQuestion] = useState<Quiz | null>(null);
  const [selectedOptionId, setSelectOptionId] = useState<string | null>(null);
  const [resuls, setResults] = useState<UserAnswer[]>([]);

  const currentAllowedOptionIndex = resuls?.length;
  const isFinished = resuls && resuls?.length === mockData?.length;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedQuestion && selectedOptionId) {
      const selectedOption = selectedQuestion?.options.find((option) => option.id === selectedOptionId);

      const correctOption = selectedQuestion?.options.find((option) => option.isCorrect);
      const isCorrect = correctOption?.id === selectedOptionId;

      setResults([
        ...resuls,
        {
          questionId: selectedQuestion.id,
          selectedOptionId: selectedOptionId,
          isCorrect: isCorrect,
          correctOption: correctOption as Option,
          answer: selectedOption?.answer as string,
        },
      ]);
      setSelectOptionId(null);
    } else {
      alert('You need to select a question and option!!');
    }
  };

  const submittedAnswer = resuls?.find((result) => result.questionId === selectedQuestion?.id);

  return (
    <main className='m-auto max-w-[640px] p-4 text-gray-700 dark:text-white'>
      <section>
        <h1 className='py-4 text-4xl font-bold'>ReMemorize</h1>
      </section>
      <section className='dark:bg-darkbg w-full bg-white'>
        <div className='rounded-md border dark:border-gray-700'>
          <div className='flex flex-wrap gap-4 border-b p-4 dark:border-b-gray-700'>
            {mockData?.map((_, i) => {
              return (
                <div
                  key={i}
                  className={cn(
                    'dark:bg- flex size-9  cursor-pointer items-center justify-center rounded-full border hover:bg-gray-100 dark:border-gray-700 ',
                    currentAllowedOptionIndex !== i && 'dark:bg-darkbg cursor-not-allowed bg-gray-100',
                    isFinished && 'cursor-pointer bg-white',
                    resuls[i] ? (resuls[i]?.isCorrect ? 'border-green-400' : 'border-red-400') : '',
                  )}
                  onClick={() => {
                    if (isFinished) setSelectedQuestion(mockData[i]);
                    if (currentAllowedOptionIndex === i) setSelectedQuestion(mockData[i]);
                  }}
                >
                  {resuls?.[i] ? (
                    resuls[i]?.isCorrect ? (
                      <img className='size-4' src={check} alt='prettier logo' />
                    ) : (
                      <img className='size-4' src={x} alt='prettier logo' />
                    )
                  ) : (
                    i + 1
                  )}
                </div>
              );
            })}
          </div>
          {selectedQuestion ? (
            <>
              <div className='border-b p-4 dark:border-gray-700'>Question: {selectedQuestion?.question}</div>
              <form onSubmit={handleSubmit}>
                <div className='p-4'>
                  <div className='space-y-2'>
                    {selectedQuestion?.options &&
                      selectedQuestion?.options?.map((option) => {
                        return (
                          <div className='space-x-4' key={option.id}>
                            <input
                              className='cursor-pointer accent-black dark:accent-white'
                              type='radio'
                              id={option.id}
                              name='options'
                              value={option.answer}
                              onChange={() => setSelectOptionId(option.id)}
                              disabled={!!submittedAnswer}
                            />
                            <label
                              className={cn(
                                'cursor-pointer',
                                submittedAnswer && 'text-red-400 line-through',
                                ((submittedAnswer?.questionId === option.id && submittedAnswer?.isCorrect) ||
                                  submittedAnswer?.correctOption?.id === option.id) &&
                                  'text-green-400 no-underline',
                              )}
                              htmlFor={option.id}
                            >
                              {option.answer}
                            </label>
                          </div>
                        );
                      })}
                  </div>
                  {submittedAnswer?.answer && (
                    <div
                      className={`my-4 rounded-md border p-3 text-sm ${
                        submittedAnswer.isCorrect
                          ? 'border-green-300 bg-green-50 text-green-700'
                          : 'border-red-300 bg-red-50 text-red-700'
                      }`}
                    >
                      <strong>Your answer:</strong> {submittedAnswer.answer} <br />
                      {submittedAnswer.isCorrect ? '✅ Correct!' : '❌ Incorrect.'}
                    </div>
                  )}
                  <div className='flex justify-end'>
                    {!isFinished && (
                      <div>
                        {submittedAnswer ? (
                          <button
                            className={cn('rounded-lg border bg-black px-4 py-1 text-gray-200')}
                            type='button'
                            onClick={(e) => {
                              e.preventDefault();
                              const nextQuestion = mockData[currentAllowedOptionIndex];

                              if (nextQuestion) {
                                setSelectedQuestion(nextQuestion);
                              }
                            }}
                          >
                            Next
                          </button>
                        ) : (
                          <button className={cn('rounded-lg border bg-black px-4 py-1 text-gray-200')} type='submit'>
                            Submit
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </>
          ) : (
            <div className='border-b p-4 dark:border-gray-700'>Select the first question to start</div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Quizzes;
