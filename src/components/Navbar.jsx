import { useState } from "react";
import { LOGO } from "../utils/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between h-32 bg-gradient-to-r from-blue-400 to-blue-700 text-white shadow-2xl w-full sticky top-0">
      <div className="logo-container pt-1 w-1/3">
        <img className="w-32 rounded-full" src={LOGO} />
      </div>
      <div className="flex items-center w-1/3">
        <ul className="flex">
          <li className="mx-5 italic transition-all duration-500 ease-in-out md:max-w-full md:opacity-100 max-w-0 opacity-0 overflow-hidden">
            Dashboard
          </li>
          <li className="mx-5 italic transition-all duration-500 ease-in-out md:max-w-full md:opacity-100 max-w-0 opacity-0 overflow-hidden">
            Tasks
          </li>
          <li className="mx-5 italic transition-all duration-500 ease-in-out md:max-w-full md:opacity-100 max-w-0 opacity-0 overflow-hidden">
            Guests
          </li>
          <li className="mx-5 italic transition-all duration-500 ease-in-out lg:max-w-full lg:opacity-100 max-w-0 opacity-0 overflow-hidden">
            Schedule
          </li>
          <li className="mx-5 italic transition-all duration-500 ease-in-out xl:max-w-full xl:opacity-100 max-w-0 opacity-0 overflow-hidden">
            Budget
          </li>
          <li className="mx-5 italic transition-all duration-500 ease-in-out 2xl:max-w-full 2xl:opacity-100 max-w-0 opacity-0 overflow-hidden">
            Notes
          </li>
          <li className="mx-5 italic transition-all duration-500 ease-in-out 2xl:max-w-full 2xl:opacity-100 max-w-0 opacity-0 overflow-hidden">
            Settings
          </li>
        </ul>
      </div>
      <div className="items-center w-1/3 justify-end hidden md:flex">
        <img className="w-32 rounded-full transition-all duration-500 ease-in-out 2xl:max-w-full 2xl:opacity-100 max-w-0 opacity-0 overflow-hidden" src={LOGO} />
        <span className="mx-5 transition-all duration-500 ease-in-out 2xl:max-w-full 2xl:opacity-100 max-w-0 opacity-0 overflow-hidden">V</span>
      </div>
      <div className="flex md:hidden items-center pr-5">
        <button>☰</button>
      </div>
    </div>
  );
};

export default Navbar;
