import { Root } from 'App';
import question from '../assets/badge-question-mark.svg';
import book from '../assets/book-heart.svg';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className='flex items-center justify-center gap-8 border-b bg-white px-6 py-4 shadow-sm'>
      <NavLink
        to={Root + '/'}
        end
        className={({ isActive }) =>
          `flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition ${
            isActive ? 'border-b-2 border-black text-black' : 'text-gray-600 hover:text-black'
          }`
        }
      >
        <img className='h-5 w-5' src={question} alt='quiz icon' />
        <span>Quizzes</span>
      </NavLink>

      <NavLink
        to={Root + '/journal'}
        className={({ isActive }) =>
          `flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition ${
            isActive ? 'border-b-2 border-black text-black' : 'text-gray-600 hover:text-black'
          }`
        }
      >
        <img className='h-5 w-5' src={book} alt='journal icon' />
        <span>My Journal</span>
      </NavLink>
    </nav>
  );
};

export default Sidebar;
