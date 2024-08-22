import React from "react";
import Carousal from "./Carousal";

const Hero = () => {
  return (
    <section className="flex flex-col">
      <Carousal />
      <div className="flex pt-[14px] overflow-x-scroll w-full">
        <div className="flex-shrink-0 flex justify-center items-center bg-black w-[150px] h-[150px] rounded-full ml-[50px]">
          <button className="flex-shrink-0 flex justify-center items-center bg-white w-[148px] h-[148px] rounded-full italic text-neutral-950">
            Music
          </button>
        </div>
        <div className="flex-shrink-0 flex justify-center items-center bg-black w-[150px] h-[150px] rounded-full ml-[50px]">
          <button className="flex-shrink-0 flex justify-center items-center bg-white w-[148px] h-[148px] rounded-full italic text-neutral-950">
            Nightlife
          </button>
        </div>
        <div className="flex-shrink-0 flex justify-center items-center bg-black w-[150px] h-[150px] rounded-full ml-[50px]">
          <button className="flex-shrink-0 flex justify-center items-center bg-white w-[148px] h-[148px] rounded-full italic text-neutral-950">
            
              Performing<br></br>
              visual arts
          </button>
        </div>
        <div className="flex-shrink-0 flex justify-center items-center bg-black w-[150px] h-[150px] rounded-full ml-[50px]">
          <button className="flex-shrink-0 flex justify-center items-center bg-white w-[148px] h-[148px] rounded-full italic text-neutral-950">
            Holiday
          </button>
        </div>
        <div className="flex-shrink-0 flex justify-center items-center bg-black w-[150px] h-[150px] rounded-full ml-[50px]">
          <button className="flex-shrink-0 flex justify-center items-center bg-white w-[148px] h-[148px] rounded-full italic text-neutral-950">
            Dating
          </button>
        </div>
        <div className="flex-shrink-0 flex justify-center items-center bg-black w-[150px] h-[150px] rounded-full ml-[50px]">
          <button className="flex-shrink-0 flex justify-center items-center bg-white w-[148px] h-[148px] rounded-full italic text-neutral-950">
            Hobbies
          </button>
        </div>
        <div className="flex-shrink-0 flex justify-center items-center bg-black w-[150px] h-[150px] rounded-full ml-[50px]">
          <button className="flex-shrink-0 flex justify-center items-center bg-white w-[148px] h-[148px] rounded-full italic text-neutral-950">
            Buisness
          </button>
        </div>
        <div className="flex-shrink-0 flex justify-center items-center bg-black w-[150px] h-[150px] rounded-full ml-[50px]">
          <button className="flex-shrink-0 flex justify-center items-center bg-white w-[148px] h-[148px] rounded-full italic text-neutral-950">
            Food & Drink
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
