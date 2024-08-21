import React from "react";
import Carousal from "./Carousal";

const Hero = () => {
  return (
    <section className="flex flex-col">
      <Carousal />
      <div className="flex pt-[14px] overflow-x-scroll w-full">
        <div className="flex-shrink-0 flex justify-center items-center bg-white w-[150px] h-[150px] rounded-full ml-[50px]">
          <button className="flex-shrink-0 flex justify-center items-center bg-black w-[148px] h-[148px] rounded-full italic text-white">
            Music
          </button>
        </div>
        <div className="flex-shrink-0 flex justify-center items-center bg-white w-[150px] h-[150px] rounded-full ml-[50px]">
          <button className="flex-shrink-0 flex justify-center items-center bg-black w-[148px] h-[148px] rounded-full italic text-white">
            Nightlife
          </button>
        </div>
        <div className="flex-shrink-0 flex justify-center items-center bg-white w-[150px] h-[150px] rounded-full ml-[50px]">
          <button className="flex-shrink-0 flex justify-center items-center bg-black w-[148px] h-[148px] rounded-full italic text-white">
            
              Performing<br></br>
              visual arts
          </button>
        </div>
        <div className="flex-shrink-0 flex justify-center items-center bg-white w-[150px] h-[150px] rounded-full ml-[50px]">
          <button className="flex-shrink-0 flex justify-center items-center bg-black w-[148px] h-[148px] rounded-full italic text-white">
            Holiday
          </button>
        </div>
        <div className="flex-shrink-0 flex justify-center items-center bg-white w-[150px] h-[150px] rounded-full ml-[50px]">
          <button className="flex-shrink-0 flex justify-center items-center bg-black w-[148px] h-[148px] rounded-full italic text-white">
            Dating
          </button>
        </div>
        <div className="flex-shrink-0 flex justify-center items-center bg-white w-[150px] h-[150px] rounded-full ml-[50px]">
          <button className="flex-shrink-0 flex justify-center items-center bg-black w-[148px] h-[148px] rounded-full italic text-white">
            Hobbies
          </button>
        </div>
        <div className="flex-shrink-0 flex justify-center items-center bg-white w-[150px] h-[150px] rounded-full ml-[50px]">
          <button className="flex-shrink-0 flex justify-center items-center bg-black w-[148px] h-[148px] rounded-full italic text-white">
            Buisness
          </button>
        </div>
        <div className="flex-shrink-0 flex justify-center items-center bg-white w-[150px] h-[150px] rounded-full ml-[50px]">
          <button className="flex-shrink-0 flex justify-center items-center bg-black w-[148px] h-[148px] rounded-full italic text-white">
            Food & Drink
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
