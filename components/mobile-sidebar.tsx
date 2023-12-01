'use client';

import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import Sidebar from './sidebar';

const MobileSidebar = () => {

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='p-0'>
        <Sidebar />
      </SheetContent>
      <SheetClose className='text-white' />
    </Sheet>
  );
};

export default MobileSidebar;
