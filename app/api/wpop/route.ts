import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const {
      kodeWPOP,
      nama,
      email,
      password,
      kewarganegaraan,
      namaNegara,
      idOrangPribadi,
      namaKtp,
      npwp,
      namaNpwp,
      kotaNpwp,
      bankTransfer,
      noRekening,
      namaRekening,
      nip,
      statusPegawai,
      fileFotoNpwp,
      fileFotoIdOrangPribadi,
      fileFotoBuktiRekening,
    } = req.body;

    const createdWPOP = await prisma.wajibPajakOrangPribadi.create({
      data: {
        kodeWPOP,
        nama,
        email,
        password,
        kewarganegaraan,
        namaNegara,
        idOrangPribadi,
        namaKtp,
        npwp,
        namaNpwp,
        kotaNpwp,
        bankTransfer,
        noRekening,
        namaRekening,
        nip,
        statusPegawai,
        fileFotoNpwp,
        fileFotoIdOrangPribadi,
        fileFotoBuktiRekening,
      },
    });

    res.status(201).json(createdWPOP);
  } catch (error) {
    console.error('Error creating WPOP:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
