import { useEffect, useState } from 'react';
import moon from '../assets/moon.svg';
import sun from '../assets/sun.svg';

const DarkmodeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>();

  useEffect(() => {
    const root = window.document.documentElement;

    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      className='rounded p-2 transition hover:bg-gray-200 dark:hover:bg-gray-700'
      onClick={() => setIsDark(!isDark)}
    >
      <img
        className='size-4 filter dark:brightness-150 dark:contrast-200 dark:invert'
        src={isDark ? moon : sun}
        alt='darkmode'
      />{' '}
    </button>
  );
};

export default DarkmodeToggle;
