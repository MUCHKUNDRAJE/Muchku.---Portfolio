import React, { useRef } from "react";
// import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CircleImageSimulation from "./SkillCollision";

function Page3() {
  const container = useRef(); // for scoping GSAP animations

  useGSAP(
    () => {
   
    },
    { scope: container }
  ); // scope for safety

  return (
    <div ref={container} className="page2 pixel text-[20vw]  md:px-20 h-[110vh]  py-10 w-full text-white bg-[#111318] relative ">

        <div className="h-full md:w-full w-96 overflow-hidden  flex items-center justify-center z-20 ">
          <h1 className=" absolute z-10 pointer-events-none text-9xl md:text-[20vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  opacity-30">Skills</h1>
         <CircleImageSimulation width={1000}/>
        </div>
    </div>
  );
}

export default Page3;
