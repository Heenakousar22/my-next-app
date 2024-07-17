import logoImage from  "./assets/logosaas copy.png";
import Image from 'next/image';
import MenuIcon from "./assets/menu.svg"

export  const Navbar=()=>{
  return(
  <div className="bg-black">
    <div className="px-4 ">
    <div className="py-4 flex items-center justify-between">
      <div className="relative">
        <div className="absolute w-full top-2 bottom-0 "></div>

     
    <Image src={logoImage} alt="logo" className="h-12 w-12 relative"/>
    </div>

    <div className="border border-white border-opacity-30 rounded-lg h-10 w-10 inline-flex justify-center items-center sm:hidden "></div>
    <MenuIcon className="text=white "/>
  </div>
  <nav className=" gap-6 items-center hidden sm:flex">
    <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition"> About</a>
    <a href="#"  className="text-opacity-60 text-white hover:text-opacity-100 transition "> Features</a>
    <a href="#"  className="text-opacity-60 text-white hover:text-opacity-100 transition "> Updates</a>
    <a href="#"  className="text-opacity-60 text-white hover:text-opacity-100 transition "> Customers</a>
    <a href="#"  className="text-opacity-60 text-white hover:text-opacity-100 transition "> Updates</a>
    <button className="bg-white py-2 px-4 rounded-lg"> Get for free</button>

     
  </nav>
  </div>
  </div>)
};
// justify-center items-center inline-flex import { text } from "stream/consumers";