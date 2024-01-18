import Image from "next/image";
import Link from "next/link";
import {LuSendToBack} from 'react-icons/lu'
export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center md:h-screen">
      <img
        className="w-full max-w-3xl"
        loading="lazy"
        object-fit="cover"
        src="/404.png"
        alt="image"
      />
      <h1 className="text-red-600 dark:text-red-400 text-3xl font-bold">
        Page Not Found 
      </h1>
      <Link className="bg-teal-500 mt-5 rounded-lg px-4 py-2 flex items-center gap-2" href='/'>
      <LuSendToBack/>
        Go to Home
      </Link>
    </div>
  );
}
