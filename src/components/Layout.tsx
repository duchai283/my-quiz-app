import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='min-h-screen bg-white text-black'>
      {/* Top navigation bar */}
      <header className='border-b shadow-sm'>
        <Sidebar />
      </header>

      {/* Main content */}
      <main className='mx-auto max-w-5xl px-4 py-6'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
