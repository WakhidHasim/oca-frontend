import DataCard from '@/components/data-card';

export default function Home() {
  return (
    <div className='p-6'>
      <h1 className='text-xl text-bold mb-4'>
        Informasi Total PPh Bulan Desember
      </h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4'>
        <DataCard label='Total PPh 21 Verifikasi' value={10} />
        <DataCard label='Total PPh 21 Verifikasi' value={10} />
        <DataCard label='Total PPh 21 Verifikasi' value={10} />
        <DataCard label='Total PPh 21 Verifikasi' value={10} />
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4'>
        <DataCard label='Total PPh 21 Verifikasi' value={10} />
        <DataCard label='Total PPh 21 Verifikasi' value={10} />
        <DataCard label='Total PPh 21 Verifikasi' value={10} />
        <DataCard label='Total PPh 21 Verifikasi' value={10} />
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4'>
        <DataCard label='Total PPh 21 Verifikasi' value={10} />
        <DataCard label='Total PPh 21 Verifikasi' value={10} />
        <DataCard label='Total PPh 21 Verifikasi' value={10} />
        <DataCard label='Total PPh 21 Verifikasi' value={10} />
      </div>
    </div>
  );
}
