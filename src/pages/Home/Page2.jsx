import React, { useRef } from "react";
// import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Card from "../../components/resuable/Card";
import JourneyCard from "../../components/resuable/JourneyCard";
import Journeydata from "../../database/Journeydata";

function Page2() {
  const container = useRef(); // for scoping GSAP animations

  useGSAP(
    () => {
   
    },
    { scope: container }
  ); // scope for safety

  return (
    <div ref={container} className="page2 pixel text-[20vw] p-1 md:px-20 min-h-full  py-10 w-full text-white bg-[#111318] ">
      <h1 className="text-center md:text-start" >My Journey</h1>
        
        <div className="flex flex-col gap-10">        
          {
            Journeydata.map((val, index) => (
              index % 2 === 0 ? <JourneyCard direction={1} index={index} /> : <JourneyCard index={index} />
            ))
          }
          
        </div>
      

    </div>
  );
}

export default Page2;
