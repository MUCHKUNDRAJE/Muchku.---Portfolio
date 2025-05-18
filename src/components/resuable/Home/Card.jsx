import React, {useRef,useState} from 'react'
import gsap from 'gsap'
import { ShipWheel } from 'lucide-react';



function Card({imag , vedio}) {
  const cursorRef = useRef(null);
    const iconRef = useRef(null);


const moveCursor = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left - 20; // center of 40px cursor
    const y = e.clientY - bounds.top - 20;

    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.3,
      ease: 'power3.out',
    });
    
  };

const showCursor = () =>{
    gsap.to(cursorRef.current, {
      opacity:1,
      scale:1,
      duration: 0.3,
      ease: 'power3.out',
    });
}

const hideCursor = () =>{
    gsap.to(cursorRef.current, {
      opacity:0,
      scale:0,  
      duration: 0.3,
      ease: 'power3.out',
    });
}
  return (
    <>
    <div onMouseMove={(e)=>moveCursor(e)} onMouseEnter={showCursor} onMouseLeave={hideCursor}  className={`h-72 w-[30rem]  rounded-4xl overflow-hidden   relative`}>

    <div ref={cursorRef}  className='cursor h-14  w-14  bg-white absolute top-0 left-0  rounded-full opacity-0  '>
      <i ref={iconRef} class="ri-arrow-right-up-line text-2xl text-black  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
    </div>
       
    {vedio ? <video  className='h-full w-full object-cover ' autoPlay muted loop src={imag}></video> :  <img   className='h-full w-full object-cover object-bottom'  src={imag} alt="" />  
}
     
    </div>
    
    </>
  )
}

export default Card