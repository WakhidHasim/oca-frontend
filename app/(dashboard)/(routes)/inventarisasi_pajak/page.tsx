import { columns } from './_components/columns';
import { DataTable } from './_components/data-table';

async function getData(): Promise<any[]> {
  return [
    {
      no: '1',
      nama_kegiatan: 'Pembuatan Sistem OCA',
      tanggal_transaksi: '1 November 2000',
      jenis_pajak: '',
      nilai_transaksi: 'Rp 1.000.000,00',
      nilai_pajak: 'Rp 50.000,00',
      nama_pemotong: 'Amikom',
      aksi: '',
    },
  ];
}

const InventarisasiPajak = async () => {
  const data = await getData();

  return (
    <div className='p-6'>
      <h1 className='text-xl text-bold mb-4'>Data Inventarisasi Pajak</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default InventarisasiPajak;
