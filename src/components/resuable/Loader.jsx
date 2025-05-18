import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Loader() {
    
    useGSAP(()=>{
      
         var tl = gsap.timeline();

        tl.to(".loader-width",{
            width:"100%",
            duration:3,
            delay:0.3,
            ease:"power3"
        })
          tl.to(".loader",{
             opacity:0,
             display:"none",
             duration:0.5,
        })
    })
  

  return (

    <>
    
    <div className='loader h-screen fixed  bg-[#111318] top-0 z-100  w-full flex items-center overflow-hidden justify-center text-white flex-col gap-3'>
         <h1 className='text-5xl'>Loading...</h1>
         <div className='h-2 bg-zinc-500 w-[70%] rounded-2xl overflow-hidden '>
            <div className='loader-width w-[0%] bg-white h-2'> </div>
         </div>
    </div>
    </>
  )
}

export default Loader