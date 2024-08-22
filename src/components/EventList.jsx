import React from 'react'

const EventList = () => {
  return (
    <section className='flex flex-col justify-center w-full'>
      <div className='flex text-neutral-950 h-[80px] justify-start items-center'>
        <h1 className='ml-[30px] italic'>Browsing Event in</h1>
        <h1 className='ml-[30px] italic'>Assam</h1>
      </div>
      <div className='flex bg-white justify-start items-center h-[50px] overflow-x-scroll'>
        <ul className='flex-shrink-0 flex justify-start items-center]'>
          <li className='ml-[30px] italic'>All</li>
          <li className='ml-[30px] italic'>For you</li>
          <li className='ml-[30px] italic'>Online</li>
          <li className='ml-[30px] italic'>Today</li>
          <li className='ml-[30px] italic'>This weekend</li>
          <li className='ml-[30px] italic'>Free</li>
          <li className='ml-[30px] italic'>Music</li>
          <li className='ml-[30px] italic'>Food & Drink</li>
          <li className='ml-[30px] italic'>Charity and Causes</li>
        </ul>
      </div>
      <div className='flex justify-evenly h-[380px] bg-slate-200 overflow-x-scroll'>
          <div className='mt-[20px] ml-[20px] flex flex-shrink-0 h-[300px] w-[300px] bg-black rounded-2xl'>
            
          </div>
          <div className='mt-[20px] ml-[20px] flex flex-shrink-0 h-[300px] w-[300px] bg-black rounded-2xl'>
            
          </div>
          <div className='mt-[20px] ml-[20px] flex flex-shrink-0 h-[300px] w-[300px] bg-black rounded-2xl'>
            
          </div>
          <div className='mt-[20px] ml-[20px] flex flex-shrink-0 h-[300px] w-[300px] bg-black rounded-2xl'>
            
          </div>
          <div className='mt-[20px] ml-[20px] flex flex-shrink-0 h-[300px] w-[300px] bg-black rounded-2xl'>
            
          </div>
      </div>
      <div className=' bg-gray-500 flex flex-col'>
        <h1 className='my-[10px] mx-[30px] italic'>Let's make it personal</h1>
        <h3 className='my-[10px] mx-[30px] italic'>Select your interests to get event suggestions based on what you love</h3>
        <div className='overflow-x-scroll h-[150px] mt-[20px]'>
          <button className='bg-white flex-shrink-0 h-[50px] py-[10px] px-[10px] ml-[20px] rounded-2xl mt-[5px] italic'>Comedy</button>
          <button className='bg-white flex-shrink-0 h-[50px] py-[10px] px-[10px] ml-[20px] rounded-2xl mt-[5px] italic'>Food</button>
          <button className='bg-white flex-shrink-0 h-[50px] py-[10px] px-[10px] ml-[20px] rounded-2xl mt-[5px] italic'>Education</button>
          <button className='bg-white flex-shrink-0 h-[50px] py-[10px] px-[10px] ml-[20px] rounded-2xl mt-[5px] italic'>Pop</button>
          <button className='bg-white flex-shrink-0 h-[50px] py-[10px] px-[10px] ml-[20px] rounded-2xl mt-[5px] italic'>Design</button>
          <button className='bg-white flex-shrink-0 h-[50px] py-[10px] px-[10px] ml-[20px] rounded-2xl mt-[5px] italic'>R&B</button>
          <button className='bg-white flex-shrink-0 h-[50px] py-[10px] px-[10px] ml-[20px] rounded-2xl mt-[5px] italic'>Hip Hop/Rap</button>
          <button className='bg-white flex-shrink-0 h-[50px] py-[10px] px-[10px] ml-[20px] rounded-2xl mt-[5px] italic'>Film</button>
          <button className='bg-white flex-shrink-0 h-[50px] py-[10px] px-[10px] ml-[20px] rounded-2xl mt-[5px] italic'>Personal Health</button>
          <button className='bg-white flex-shrink-0 h-[50px] py-[10px] px-[10px] ml-[20px] rounded-2xl mt-[5px] italic'>Blues & Jazz</button>
          <button className='bg-white flex-shrink-0 h-[50px] py-[10px] px-[10px] ml-[20px] rounded-2xl mt-[5px] italic'>Travel</button>
          <button className='bg-white flex-shrink-0 h-[50px] py-[10px] px-[10px] ml-[20px] rounded-2xl mt-[5px] italic'>Rock</button>
          <button className='bg-white flex-shrink-0 h-[50px] py-[10px] px-[10px] ml-[20px] rounded-2xl mt-[5px] italic'>Yoga</button>
          <button className='bg-white flex-shrink-0 h-[50px] py-[10px] px-[10px] ml-[20px] rounded-2xl mt-[5px] italic'>Country</button>
          <button className='bg-white flex-shrink-0 h-[50px] py-[10px] px-[10px] ml-[20px] rounded-2xl mt-[5px] italic'>Startups & Small Buisness</button>
          <button className='bg-white flex-shrink-0 h-[50px] py-[10px] px-[10px] ml-[20px] rounded-2xl mt-[5px] italic'>Classical</button>
          <button className='bg-white flex-shrink-0 h-[50px] py-[10px] px-[10px] ml-[20px] rounded-2xl mt-[5px] italic'>Mental health</button>
          <button className='bg-white flex-shrink-0 h-[50px] py-[10px] px-[10px] ml-[20px] rounded-2xl mt-[5px] italic'>TV</button>
          <button className='bg-white flex-shrink-0 h-[50px] py-[10px] px-[10px] ml-[20px] rounded-2xl mt-[5px] italic'>Alternative</button>
          <button className='bg-white flex-shrink-0 h-[50px] py-[10px] px-[10px] ml-[20px] rounded-2xl mt-[5px] italic'>Musical</button>
          
        </div>
      </div>
    </section>
  )
}

export default EventList