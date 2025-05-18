import React, { useRef } from "react";
// import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Card from "./Card";
import JourneyCard from "./JourneyCard";
import Journeydata from "../../../database/Journeydata";

function Page2() {
  const container = useRef(); // for scoping GSAP animations

  useGSAP(
    () => {
   
    },
    { scope: container }
  ); // scope for safety

  return (
    <div ref={container} className="page2 pixel text-[20vw] px-20 min-h-full  py-10 w-full text-white bg-[#111318] ">
      My Journey
        
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
