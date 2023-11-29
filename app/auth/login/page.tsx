import Image from "next/image";


export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen" id="login">
      <div className="bg-[#700070] flex w-1/2">
        <div className="text-white px-8 py-10">
          <div className="">
            <Image src="/no-image.png" alt="No Image" width={195} height={160} />
          </div>
          <div className="text-center mt-10">
            <h1 className="text-2xl"> OCA PROJECT </h1>
            <div className="mt-2"> LOGIN TO CONTINUE </div>
          </div>
        </div>
        <div className="bg-gray-50 bg-opacity-60 px-8 py-10 w-2/3">
          <form className="flex flex-col">
            <div className="form-group">
              <label htmlFor="in-nik"> NIK </label>
              <input type="text" name="nik" id="in-nik" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="in-pass"> Password </label>
              <input type="password" name="password" id="in-pass" className="form-input" />
            </div>
            <div className="form-group flex justify-center items-center mt-5">
              <button className="btn"> Login </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}