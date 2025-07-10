import { MousePointerClickIcon, Repeat } from 'lucide-react';
import React ,{useEffect, useState} from 'react'
import gsap from 'gsap';

function Page2() {
   useEffect(()=>{
    gsap.to(".click",{
        scale:0.5,
        duration:0.6,
        yoyo:true,
        repeat:-1
    })
   })

const [clickLayer, setclickLayer] = useState(true);

  return (
    <div className='hidden md:flex h-screen w-full  bg-[#111318] flex-col  items-center justify-center'>
            
        <h2 className="pixel text-3xl text-white mb-5">Prototype</h2>
      
         <div className=' flex items-center justify-center relative cursor-pointer '>
        <iframe src="https://pokemon-dlc.onrender.com/" frameborder="0" width={1200} height={600} ></iframe>        
        <div onClick={()=>{setclickLayer((prev)=>{ !prev})}} className={` absolute bg-black w-full h-full top-0 left-0 rounded-2xl ${clickLayer ?"opacity-60 ":"hidden"} a flex items-center justify-center `}>
               <h1 className='text-3xl text-white pixel flex items-center justify-center flex-col '>
                <MousePointerClickIcon size={60} className='click text-center'/>
                Double Click Here To Start 
                </h1>
        </div>
        <div className='h-40 w-40 absolute bottom-0 -right-20 z-50'>
          <img src="/image/wasd.png" alt="" />
          <h1 className='text-center text-white pixel'>Use WASD keys to  move</h1>
        </div>
         </div>
       
        
 

    </div>
  )
}

export default Page2