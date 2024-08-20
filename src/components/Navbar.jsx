import { useState } from "react";
import { close, menu } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex justify-between w-full">
      <div>
        <img src=""></img>
      </div>
      <div className="flex">
        <ul className="list-none sm:flex hidden justify-end flex-1">
          <li className="mr-4 cursor-pointer text-white">Find Events</li>
          <li className="mr-4 cursor-pointer text-white">Create Events</li>
          <li className="mr-4 cursor-pointer text-white">Help Center</li>
          <li className="mr-4 cursor-pointer text-white">Find my tickets</li>
          <li className="mr-4 cursor-pointer text-white">Login</li>
          <li className="mr-4 cursor-pointer text-white">SignUp</li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
