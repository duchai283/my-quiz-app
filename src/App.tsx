import Journal from 'pages/journal';
import { useState } from 'react';
import Sidebar from '@components/Sidebar';
import Quizzes from 'pages/quizzes';
import HeroSection from '@components/HeroSection';
import DarkmodeToggle from '@components/DarkmodeToggle';

export const Root = '/my-quiz-app';

function App() {
  const [tab, setTab] = useState<string | null>(null);
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

  const renderByTab = () => {
    switch (tab) {
      case 'quizzes':
        return (
          <main className='mx-auto max-w-5xl px-4 py-6'>
            <Quizzes />
          </main>
        );
      case 'journal':
        return (
          <main className='mx-auto max-w-5xl px-4 py-6'>
            <Journal />
          </main>
        );
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className='flex max-h-screen flex-col bg-slate-50 md:flex-row dark:bg-black'>
      <Sidebar tab={tab} setTab={setTab} />
      <div className='flex flex-1 flex-col'>
        <header className='dark:bg-darkbg flex h-14 w-full items-center justify-end border-b bg-white px-4 shadow-sm dark:border-b-gray-700'>
          <DarkmodeToggle />
        </header>
        <main className='flex-1 overflow-auto'>{renderByTab()}</main>
      </div>
    </div>
  );
}

export default App;
