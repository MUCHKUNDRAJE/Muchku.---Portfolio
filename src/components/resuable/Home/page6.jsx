import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import Card from "./Card";
import JourneyCard from "./JourneyCard";
import Journeydata from "../../../database/Journeydata";
import { Button } from "../../ui/button";
import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger);


function Page6() {
  const container = useRef(); // for scoping GSAP animations

  return (
    <div
      ref={container}
      className="page6 pixel text-[4vw] px-20  min-h-screen  py-20 w-full text-white bg-[#111318] relative "
>
   <h1>Extracurricular</h1>
  <div className="h-[35rem] w-full flex items-end justify-between ">
       <div className="h-full w-96 relative">
          <img className="h-full w-full object-cover opacity-70 " src="/image/dance.jpg" alt="" />
          <h1 className=" absolute bottom-0 right-10 ">Dance</h1>
       </div>
           <div className="h-[35rem] w-96   relative">
            <div className="leading-[0.9]">
           <h1 className="text-7xl">Clubs </h1>
           <h1 className="text-sm sans2 opacity-50">Roles and responsibilities</h1>
            </div>

           <div className="mt-10">
            <h1 className="text-2xl"> Enginnering India Ycce </h1>
            <h2 className="text-xl ml-10">Role AIDS Dept Head</h2>
           </div>

            <div className="mt-20 absolute top-50 right-0">
            <h1 className="text-2xl"> Emerge Poetry Club of Ycce</h1>
            <h2 className="text-xl ml-10">Role Database Cohead</h2>
           </div>

           
            <div className="mt-20 absolute bottom-10 ">
            <h1 className="text-2xl"> CT Student Concil</h1>
            <h2 className="text-xl ml-10">Role Cultural Cohead</h2>
                <h2 className="text-2xl ml-10">Role ACM Junior Member</h2>
           </div>

         
       </div>
         <div className=" w-96 relative">
          <img className="h-full w-full object-cover opacity-70 object-center " src="/image/poet.JPG" alt="" />
          <h1 className=" absolute bottom-0 right-10 ">Poetry</h1>
       </div>
  </div>
  







    </div>
  );
}

export default Page6;
