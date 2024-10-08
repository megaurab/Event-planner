import { useState } from "react";
import { menu, close,logo } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex justify-between w-full">
      <div className="w-1/3">
        <img className=" rounded-full ml-[20px] w-[100px] h-[100px]" src={logo}></img>
      </div>
      <div className="flex justify-center items-center w-2/3">
        <ul className="list-none sm:flex hidden justify-evenly flex-1">
          <li className="mr-4 cursor-pointer text-neutral-950 italic">Find Events</li>
          <li className="mr-4 sm:flex hidden cursor-pointer text-neutral-950 italic">Create Events</li>
          <li className="mr-4 md:flex hidden cursor-pointer text-neutral-950 italic">Help Center</li>
          <li className="mr-4 lg:flex hidden cursor-pointer text-neutral-950 italic">Find my tickets</li>
          <li className="mr-4 xl:flex hidden cursor-pointer text-neutral-950 italic">Login</li>
          <li className="mr-4 2xl:flex hidden cursor-pointer text-neutral-950 italic">SignUp</li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[32px] h-[32px] object-contain mr-4"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div className={`${toggle ? "flex" : "hidden"} rounded-xl absolute top-20 my-2`}>
            <ul className="list-none flex flex-col justify-end flex-1">
              <li className="mr-4 cursor-pointer text-white italic">Find Events</li>
              <li className="mr-4 cursor-pointer text-white italic">Create Events</li>
              <li className="mr-4 cursor-pointer text-white italic">Help Center</li>
              <li className="mr-4 cursor-pointer text-white italic">Find my tickets</li>
              <li className="mr-4 cursor-pointer text-white italic">Login</li>
              <li className="mr-4 cursor-pointer text-white italic">SignUp</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
