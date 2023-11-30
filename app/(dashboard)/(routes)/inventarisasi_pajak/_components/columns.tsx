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
    header: 'Nama Penerima',
  },
  {
    accessorKey: 'tanggal_transaksi',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Tanggal Transaksi
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'jenis_pajak',
    header: 'Jenis Pajak',
  },
  {
    accessorKey: 'nilai_transaksi',
    header: 'Nilai Transaksi',
  },
  {
    accessorKey: 'nilai_pajak',
    header: 'Nilai Pajak',
  },
  {
    accessorKey: 'nama_pemotong',
    header: 'Nama Pemotong',
  },
  {
    accessorKey: 'aksi',
    header: 'Aksi',
  },
];
