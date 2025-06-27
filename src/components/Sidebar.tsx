import question from '../assets/badge-question-mark.svg';
import book from '../assets/book-heart.svg';

type SidebarProps = {
  tab: string | null;
  setTab: (value: string) => void;
};

const Sidebar = ({ tab, setTab }: SidebarProps) => {
  const NavItem = ({ icon, label, active, onClick }: any) => (
    <div
      onClick={onClick}
      className={`flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all dark:text-white dark:hover:bg-gray-700 ${
        active ? 'bg-gray-200 shadow dark:bg-gray-700' : 'text-gray-600 hover:bg-gray-100 hover:text-black'
      }`}
    >
      <img
        className='size-5 filter dark:brightness-150 dark:contrast-200 dark:invert'
        src={icon}
        alt={`${label} icon`}
      />
      {label}
    </div>
  );

  return (
    <nav className='dark:bg-darkbg sidebar flex w-full flex-row items-center justify-between gap-4 border-b bg-white px-4 py-3 shadow-md lg:h-full lg:min-h-screen lg:w-48 lg:flex-col lg:items-start lg:justify-start lg:border-b-0 lg:border-r lg:px-4 lg:py-6 dark:border-b-gray-700'>
      {/* Logo */}
      <div
        className='flex cursor-pointer items-center gap-2 text-lg font-bold tracking-wide text-gray-800 lg:mb-8 lg:w-full dark:text-white'
        onClick={() => setTab('')}
      >
        <img className='size-4 filter dark:brightness-150 dark:contrast-200 dark:invert' src='brain.svg' alt='logo' />
        DevTrack
      </div>

      {/* Navigation Items */}
      <div className='flex gap-4 lg:block lg:w-full lg:space-y-4'>
        <NavItem
          icon={question}
          label='Quizzes'
          active={tab === 'quizzes'}
          onClick={() => setTab(tab === 'quizzes' ? '' : 'quizzes')}
        />
        <NavItem
          icon={book}
          label='Journal'
          active={tab === 'journal'}
          onClick={() => setTab(tab === 'journal' ? '' : 'journal')}
        />
      </div>
    </nav>
  );
};

export default Sidebar;
