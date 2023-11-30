import Lists from "@/components/auth/lists";
import Image from "next/image";

const data: any = [
  {
    icon: '/ic_baseline-person-pin.svg',
    text: 'PRODI S1-SISTEM INFORMASI'
  },
  {
    icon: '/ic_baseline-person-pin.svg',
    text: 'DIRECTORAT PERENCANAAN DAN KEUANGAN'
  },
  {
    icon: '/ic_baseline-person-pin.svg',
    text: 'SARANA DAN PRASARANA'
  }
];

export default function Verifikasi() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="floating-verif-icon">
        <Image src="/no-image.png" width={100} height={80} alt="No Image" />
      </div>
      <div className="bg-[#ba90bc] w-1/2 rounded-md p-8">
        <div className="text-center mt-10 mb-3">
          <h1 className="text-2xl text-gray-700 font-bold"> OCA PROJECT </h1>
          <div className="mt-2 font-bold text-xl"> Wiwi Widayani, S.Kom,. M.Kom </div>
        </div>
        <div>
          <h2 className="text-center"> PILIH SATUAN KERJA </h2>
          <Lists data={ data }/>
        </div>
      </div>
    </div>
  );
}
