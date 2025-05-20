import React from 'react'
import { Button } from '../ui/button'

function UI() {
  return (
    <>
    
        <div className="h-96 w-[33rem] bg-blue-300 rounded-2xl overflow-hidden flex flex-wrap relative">
            <div className="h-1/2 w-1/2 bg-red-400">
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
                src="/image/Reimage.mp4"
              ></video>
            </div>
            <div className="h-1/2 w-1/2 bg-red-400">
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
                src="/image/Anime.com.mp4"
              ></video>
            </div>
            <div className="h-1/2 w-1/2 bg-red-400">
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
                src="/image/Gameboy.mp4"
              ></video>
            </div>
            <div className="h-1/2 w-1/2 bg-red-400">
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
                src="/image/Works.mp4"
              ></video>
            </div>
             <div className="sans2 h-full w-full bg-black opacity-0  absolute top-0 text-black hover:opacity-80 flex flex-col items-center transition-opacity ease  justify-center  ">

                  <h1 className="text-white pixel text-4xl" >My UI Design Gallery</h1>
                    <Button className='bg-white text-zinc-20 mt-2'> see Details  </Button>
                </div>
          </div>
    
    </>
  )
}

export default UI