import { columns } from './_components/columns';
import { DataTable } from './_components/data-table';

async function getData(): Promise<any[]> {
  return [
    {
      no: '1',
      nama_kegiatan: 'Pembuatan Sistem OCA',
      nama_penerima: 'Wakhid Hasim',
      penghasilan_bruto: 'Rp. 4.000.000,00',
      tanggal_potong: '1 November 2023',
      aksi: '',
    },
  ];
}

const PPh23 = async () => {
  const data = await getData();

  return (
    <div className='p-6'>
      <h1 className='text-xl text-bold mb-4'>Data PPh 23</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PPh23;
