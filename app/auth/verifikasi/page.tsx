import Image from "next/image";

export default function Verifikasi() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="floating-verif-icon">
        <Image src="/no-image.png" width={100} height={80} alt="No Image"/>
      </div>
      <div className="bg-[#ba90bc] w-1/2 rounded-md p-8">
        <div className="text-center mt-10 mb-3">
          <h1 className="text-2xl text-gray-700 font-bold"> OCA PROJECT </h1>
          <div className="mt-2 font-bold text-xl"> Wiwi Widayani, S.Kom,. M.Kom </div>
        </div>
        <div>
          <h2 className="text-center"> PILIH SATUAN KERJA </h2>
          <div className="w-3/4 mx-auto">
            <div className="flex my-4 py-2 px-1 gap-2 bg-[#700070] rounded-md text-white">
              <div className="px-1">
                <Image src='/ic_baseline-person-pin.svg' width={24} height={24} alt="Icon" />
              </div>
              <div className="px-1">
                PRODI S1-SISTEM INFORMASI
              </div>
            </div>
            <div className="flex my-4 py-2 px-1 gap-2 bg-[#700070] rounded-md text-white">
              <div className="px-1">
                <Image src='/ic_baseline-person-pin.svg' width={24} height={24} alt="Icon" />
              </div>
              <div className="px-1">
                PRODI S1-SISTEM INFORMASI
              </div>
            </div>
            <div className="flex my-4 py-2 px-1 gap-2 bg-[#700070] rounded-md text-white">
              <div className="px-1">
                <Image src='/ic_baseline-person-pin.svg' width={24} height={24} alt="Icon" />
              </div>
              <div className="px-1">
                PRODI S1-SISTEM INFORMASI
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
