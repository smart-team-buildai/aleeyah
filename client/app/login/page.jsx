import { Outfit } from "next/font/google";
import Image from "next/image";

export default function Login() {
  return (
    <main className="h-[100vh] flex flex-col items-center justify-center gap-12">
      <div className="item-center">
        <Image src={"/logo.png"} width={212} height={58} alt="product logo"/>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-primarycolor font-bold text-3xl">Sign In</h1>
        <p>Don't have an account? <a href="./signup" className="text-primarycolor">Sign Up</a></p>
      </div>
      
      <div className="flex flex-col gap-[25px]">
        <form action="" className="flex flex-col gap-4">
          <label className="text-gray-400">E-mail address</label>
          <input type="email" placeholder="youremail@example.com" className="bg-gray-50 h-[60px] rounded px-3"/>
        </form>

        <button className="bg-primarycolor py-3 px-[200px] rounded text-white">Continue</button>
      </div>
    </main>
  );
}