'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  ListChecks,
  LucideCircleDollarSign,
  PlusCircleIcon,
  VerifiedIcon,
} from 'lucide-react';

const agentRoutes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-purple-300',
  },
  {
    label: 'PPh 21',
    icon: ListChecks,
    href: '/pph21',
    color: 'text-yellow-300',
  },
  {
    label: 'PPh 23',
    icon: ListChecks,
    href: '/pph23',
    color: 'text-orange-500',
  },
  {
    label: 'PPh 4(2)',
    icon: ListChecks,
    href: '/pph4(2)',
    color: 'text-red-700',
  },
  {
    label: 'Inventarisasi Pajak',
    icon: LucideCircleDollarSign,
    href: '/inventarisasi_pajak',
    color: 'text-green-500',
  },
  {
    label: 'Register WPOP',
    icon: PlusCircleIcon,
    href: '/register_wpop',
    color: 'text-blue-500',
  },
  {
    label: 'Register WPBU',
    icon: PlusCircleIcon,
    href: '/register_wpbu',
    color: 'text-violet-500',
  },
  {
    label: 'Verifikasi WPOP',
    icon: VerifiedIcon,
    href: '/verifikasi_wpop',
    color: 'text-emerald-500',
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-[#700070] text-white border-r shadow-sm'>
      <div className='px-3 py-2 flex-1'>
        <Link
          href='/dashboard'
          className='flex items-center justify-center pl-3 mb-14'
        >
          <div className='text-medium font-bold'>ONE COLLECTING AGENT</div>
        </Link>
        <div className='space-y-1'>
          {agentRoutes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/20 rounded-lg transition',
                pathname === route.href
                  ? 'text-white bg-white/20'
                  : 'text-zinc-400'
              )}
            >
              <div className='flex items-center flex-1'>
                <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
