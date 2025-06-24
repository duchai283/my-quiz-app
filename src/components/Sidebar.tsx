import question from '../assets/badge-question-mark.svg';
import book from '../assets/book-heart.svg';

type SidebarProps = {
  tab: string | null;
  setTab: (value: string) => void;
};
const Sidebar = ({ tab, setTab }: SidebarProps) => {
  return (
    <nav className='flex items-center justify-center gap-8 border-b bg-white px-6 py-2 shadow-sm'>
      <div
        onClick={() => setTab(tab === 'quizzes' ? '' : 'quizzes')}
        className={`flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition ${
          tab === 'quizzes' ? 'border-b-2 border-black text-black' : 'text-gray-600 hover:text-black'
        }`}
      >
        <img className='h-5 w-5' src={question} alt='quiz icon' />
        <span>Quizzes</span>
      </div>

      <div
        onClick={() => setTab(tab === 'journal' ? '' : 'journal')}
        className={`flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition ${
          tab === 'journal' ? 'border-b-2 border-black text-black' : 'text-gray-600 hover:text-black'
        }`}
      >
        <img className='h-5 w-5' src={book} alt='journal icon' />
        <span>My Journal</span>
      </div>
    </nav>
  );
};

export default Sidebar;
