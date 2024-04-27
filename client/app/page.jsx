import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-[1700px]  mx-auto  ">
        <header className=" flex justify-between items-center p-8 ">
          <div className="w-28 h-full">
            <Image
              src={"/logo.png"}
              width={1000}
              height={1000}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <button className="border border-primarycolor p-2 md:p-4 rounded-lg text-primarycolor">
              Login
            </button>
          </div>
        </header>
      </div>
    </>
  );
}
