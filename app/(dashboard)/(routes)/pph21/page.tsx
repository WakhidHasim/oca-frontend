import { columns } from './_components/columns';
import { DataTable } from './_components/data-table';

async function getData(): Promise<any[]> {
  return [
    {
      no: '1',
      nama_kegiatan: 'Pembuatan Sistem OCA',
      no_pengajuan_kegiatan_anggaran: '1234567',
      total_penerima_kegiatan: '4',
      status: 'Proses',
      aksi: '',
    },
  ];
}

const PPh21 = async () => {
  const data = await getData();

  return (
    <div className='p-6'>
      <h1 className='text-xl text-bold mb-4'>Data Kegiatan PPh 21</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PPh21;
