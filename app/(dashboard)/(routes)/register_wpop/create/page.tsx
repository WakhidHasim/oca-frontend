'use client';

import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  kodeWPOP: z.string(),
  nama: z.string(),
  email: z.string(),
  password: z.string(),
  kewarganegaraan: z.string(),
  namaNegara: z.string(),
  idOrangPribadi: z.string(),
  namaKtp: z.string(),
  npwp: z.string(),
  namaNpwp: z.string(),
  kotaNpwp: z.string(),
  bankTransfer: z.string(),
  noRekening: z.string(),
  namaRekening: z.string(),
  nip: z.string(),
  statusPegawai: z.string(),
});

const CreateWajibPajakOrangPribadi = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      kodeWPOP: '',
      nama: '',
      email: '',
      password: '',
      kewarganegaraan: '',
      namaNegara: '',
      idOrangPribadi: '',
      namaKtp: '',
      npwp: '',
      namaNpwp: '',
      kotaNpwp: '',
      bankTransfer: '',
      noRekening: '',
      namaRekening: '',
      nip: '',
      statusPegawai: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        // Menambahkan setiap nilai ke FormData
        formData.append(key, value);
      });

      // Mengirim permintaan POST ke endpoint yang sesuai
      const response = await axios.post('/api/wpop', formData);

      router.push(`/register_wpop`);
      console.log('Data Wajib Pajak Orang Pribadi ditambahkan:', response.data);
    } catch {
      console.log('Something went wrong');
    }
  };

  return (
    <div className='p-6 bg-slate-50 rounded-md'>
      <div>
        <h1 className='text-xl text-bold mb-4'>
          Tambah Data Wajib Pajak Orang Pribadi
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-8 mt-8'
          >
            <FormField
              control={form.control}
              name='kodeWPOP'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kode WPOP</FormLabel>
                  <FormControl>
                    <Input placeholder='Kode wpop' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='nama'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama</FormLabel>
                  <FormControl>
                    <Input placeholder='Masukan Nama' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='Masukan Email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='kewarganegaraan'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Warga Kenegaraan</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Pilih Warga Kenegaraan ' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='WNI'>WNI</SelectItem>
                      <SelectItem value='WNA'>WNA</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='namaNegara'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Negara</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Pilih Negara' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='indonesia'>Indonesia</SelectItem>
                      <SelectItem value='malaysia'>malaysia</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='idOrangPribadi'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Id Orang Pribadi</FormLabel>
                  <FormControl>
                    <Input placeholder='Masukkan Id Orang Pribadi' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='namaKtp'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Ktp</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Masukan nama sesuai identitas'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='npwp'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Npwp</FormLabel>
                  <FormControl>
                    <Input placeholder='Masukan nomer NPWP' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='namaNpwp'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama NPWP</FormLabel>
                  <FormControl>
                    <Input placeholder='Masukan Nama Sesuai NPWP' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='kotaNpwp'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kota NPWP</FormLabel>
                  <FormControl>
                    <Input placeholder='Masukan Kota sesuai NPWP' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='bankTransfer'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Bank</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Pilih Bank' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='mandiri'>Mandiri</SelectItem>
                      <SelectItem value='bca'>BCA</SelectItem>
                      <SelectItem value='bri'>BRI</SelectItem>
                      <SelectItem value='bni'>BNI</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='noRekening'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>No Rekening</FormLabel>
                  <FormControl>
                    <Input placeholder='Masukan No Rekening' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='namaRekening'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Rekening</FormLabel>
                  <FormControl>
                    <Input placeholder='Masukkan Nama Rekening' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='nip'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NIP</FormLabel>
                  <FormControl>
                    <Input placeholder='Masukan NIP' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='statusPegawai'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status Pegawai</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Pilih Status Pegawai' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='tetap'>Pegawai Tetap</SelectItem>
                      <SelectItem value='pegawai_tidak_tetp'>
                        Pegawai Tidak Tetap
                      </SelectItem>
                      <SelectItem value='bukan_pegawai'>
                        Bukan Pegawai
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='flex items-center gap-x-2'>
              <Link href='/register_wpop'>
                <Button type='button' variant='ghost'>
                  Batal
                </Button>
              </Link>
              <Button type='submit'>Tambah</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateWajibPajakOrangPribadi;
