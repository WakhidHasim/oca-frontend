import { columns } from './_components/columns';
import { DataTable } from './_components/data-table';

async function getData(): Promise<any[]> {
  return [
    {
      no: '1',
      npwp: '0000000000000000000',
      nama_wajib_pajak_orang_pribadi: 'Wakhid Hasim',
      aksi: '',
    },
  ];
}

const VerifikasiWajibPajakOrangPribadi = async () => {
  const data = await getData();

  return (
    <div className='p-6'>
      <h1 className='text-xl text-bold mb-4'>
        Data Verifikasi Wajib Pajak Orang Pribadi
        <DataTable columns={columns} data={data} />
      </h1>
    </div>
  );
};

export default VerifikasiWajibPajakOrangPribadi;
