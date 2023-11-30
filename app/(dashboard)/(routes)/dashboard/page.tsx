import DataCard from '@/components/data-card';

export default function Home() {
  const monthNames = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const date = new Date();
  let month = monthNames[date.getMonth()];

  return (
    <div className='p-6'>
      <h1 className='text-xl text-bold mb-4'>
        Informasi Total PPh Bulan {month}
      </h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>
        <DataCard label='Total PPh 21 Verifikasi' value={60} />
        <DataCard label='Total PPh 21 Sudah Setor' value={210} />
        <DataCard label='Total PPh 21 Belum Setor' value={70} />
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>
        <DataCard label='Total PPh 23 Verifikasi' value={60} />
        <DataCard label='Total PPh 23 Sudah Setor' value={210} />
        <DataCard label='Total PPh 23 Belum Setor' value={70} />
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>
        <DataCard label='Total PPh 4 Ayat 2 Verifikasi' value={60} />
        <DataCard label='Total PPh 4 Ayat 2 Sudah Setor' value={210} />
        <DataCard label='Total PPh 4 Ayat 2 Belum Setor' value={70} />
      </div>
    </div>
  );
}
