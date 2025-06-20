import { FormEvent, useState } from 'react';
import data from './mock.json';
import { cn } from './utils';
import x from './assets/x.svg';
import check from './assets/check.svg';

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

function App() {
  const mockData: Quiz[] = data;

  const [selectedQuestion, setSelectedQuestion] = useState<Quiz | null>(null);
  const [selectedOptionId, setSelectOptionId] = useState<string | null>(null);
  const [resuls, setResults] = useState<UserAnswer[]>([]);

  const currentAllowedOptionIndex = resuls?.length;
  const isFinished = resuls && resuls?.length === mockData?.length;

  // Why I'm doing this:
  // I was inspired by Keven—not by his project, but by his idea that we should build something ourselves rather than just follow a tutorial.
  // So I asked myself again: why did I take this course? It was because of one of Phil's videos.
  // He talked about how when we build something that relates to ourselves, we’re more motivated to push through and really learn deeply.
  // After reflecting on that, I thought: how can I remember all the little things I’m learning in each section of the course?
  // Sometimes it’s hard to retain everything if we don’t review it regularly.
  // That’s why I’m building this app—to store the lessons that are useful to me and to practice them whenever I want.
  // Every time I do one of these quizzes, it’s like I’m adding another small brick to my foundation of knowledge.

  // TODO:
  // Build a UI to list all the questions (e.g., Question 1, 2, 3, 4)
  // Build a UI to show a question and its options
  // Handle submission to check whether the selected option is correct
  // Show the result to the user
  // After submission, show a "Next" button and hide the "Submit" button
  // Only allow the user to go to the next question after submitting the current one
  // Optional Features:
  // - Cache the user's answers
  // - Randomize the order of questions and options so the quiz feels fresh each time

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

  console.log('submittedAnswer', submittedAnswer);
  return (
    <main className='m-auto max-w-[640px] text-gray-700 '>
      <section>
        <h1 className='py-4 text-4xl font-bold'>ReMemorize</h1>
      </section>
      <section className='w-full'>
        <div className='rounded-md border'>
          <div className='flex gap-4 border-b p-4'>
            {mockData?.map((_, i) => {
              return (
                <div
                  key={i}
                  className={cn(
                    'flex size-9 cursor-pointer items-center justify-center rounded-full border hover:bg-gray-100 ',
                    currentAllowedOptionIndex !== i && 'cursor-not-allowed bg-gray-100',
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
              <div className='border-b p-4'>Question: {selectedQuestion?.question}</div>
              <form onSubmit={handleSubmit}>
                <div className='p-4'>
                  <div className='space-y-2'>
                    {selectedQuestion?.options &&
                      selectedQuestion?.options?.map((option) => {
                        return (
                          <div className='space-x-4' key={option.id}>
                            <input
                              className='cursor-pointer'
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
            <div className='border-b p-4'>Select the first question to start</div>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
