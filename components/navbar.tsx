import { Bell } from 'lucide-react';
import MobileSidebar from './mobile-sidebar';

const Navbar = () => {
  return (
    <div className='flex border-b bg-white shadow-sm items-center p-4'>
      <MobileSidebar />
      <div className='flex w-full justify-end'>
        <Bell className='mr-3' />
        Profile
      </div>
    </div>
  );
};

export default Navbar;
