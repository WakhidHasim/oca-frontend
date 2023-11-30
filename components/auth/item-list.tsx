import Image from "next/image";

export default function ItemList({ data }: any) {
  return (
    <div className="flex my-4 py-2 px-1 gap-2 bg-[#700070] rounded-md text-white">
      <div className="px-1">
        <Image src={data.icon} width={24} height={24} alt="Icon" />
      </div>
      <div className="px-1">
        {data.text}
      </div>
    </div>
  );
}