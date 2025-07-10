import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function UI() {
  return (
    <>
    <div className="w-[30rem] h-72 md:h-96 scale-95 md:scale-100  md:max-w-lg lg:w-[33rem] mt-20 rounded-2xl overflow-hidden relative group">
      {/* Grid of Videos */}
      <div className="grid grid-cols-2 grid-rows-2 h-80 sm:h-96 w-full">
        {['Reimage', 'Anime.com', 'Gameboy', 'Works'].map((video, index) => (
          <div className="w-full h-full" key={index}>
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              src={`/web/${video}.webm`}
            />
          </div>
        ))}
      </div>

      {/* Overlay on Hover */}
      <div className="sans2 absolute top-0 left-0 w-full h-full bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
        <h1 className="text-white pixel text-2xl sm:text-4xl text-center px-4">
          My UI Design Gallery
        </h1>
        <Link to="/project/Uigallery">
          <Button className="bg-white text-zinc-800 mt-4">See Details</Button>
        </Link>
      </div>
    </div>
     <div className=' md:hidden w-full h-full pb-20 py-10 flex items-center justify-center flex-col'>

                        <div className="   h-fit w-90   md:hidden flex items-center justify-center flex-col">
    
                      <h1 className="text-white pixel text-5xl md:text-4xl text-center " >  My UI Design Gallery</h1>
                     
                      <Link to="/project/Uigallery">
                        <Button className='bg-white text-zinc-20 mt-2 text-black'> see Details</Button>
                     </Link>
                    </div>
    
                    </div>
    </>
  );
}

export default UI;
