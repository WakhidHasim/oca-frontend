'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: 'no',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          No
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'nama_kegiatan',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nama Kegiatan
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'no_pengajuan_kegiatan_anggaran',
    header: 'No Pengajuan Kegiatan Anggaran',
  },
  {
    accessorKey: 'total_penerima_kegiatan',
    header: 'Total Penerima Kegiatan',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'aksi',
    header: 'Aksi',
  },
];
