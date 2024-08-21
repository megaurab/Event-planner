import { useState } from "react";

const images = ["./image3.jpeg", "./image1.jpeg"];

const Carousal = () => {
  const [imageIndex, setImageindex] = useState(0);

  const handleClick = () => {
    const nextIndex = (imageIndex + 1) % images.length;
    setImageindex(nextIndex);
  };

  return (
    <div className="flex flex-col items-center">
      <div className=" relative w-full h-[500px] overflow-hidden flex justify-center items-center opacity-70">
        <img
          src={images[imageIndex]}
          alt="carousel"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col ml-[250px] top-1/3 bottom-4">
          <div className="flex mr flex-col w-1/2 h-1/2 overflow-hidden">
            <h1 className="text-white italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h1>
          </div>
          <button className="w-[100px] bg-red-300 rounded-2xl text-white italic opacity-75 mt-[8px]">EXPLORE</button>
        </div>

        <button
          onClick={handleClick}
          className="absolute right-4 top-[250px] transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Carousal;
