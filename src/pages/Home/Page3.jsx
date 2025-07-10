import React, { useRef } from "react";
// import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CircleImageSimulation from "./SkillCollision";
import { useIsDesktop } from "../../utils/useIsDesktop";


function Page3() {
  const container = useRef(); // for scoping GSAP animations
  const isDesktop = useIsDesktop();
  useGSAP(
    () => {

    },
    { scope: container }
  ); // scope for safety

  return (

    <div ref={container} className="page2 pixel text-[20vw] md:px-20 md:h-[110vh] overflow-hidden  py-10 w-full text-white bg-[#111318] relative ">

      {isDesktop &&

        <div className="hidden md:flex h-full md:w-full w-96 overflow-hidden  items-center justify-center z-20 ">
          <h1 className=" absolute z-10 pointer-events-none text-9xl md:text-[20vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  opacity-30">Skills</h1>
          <CircleImageSimulation width={1000} />
        </div>

      }


      {
        !isDesktop &&
        <div className="block  md:hidden h-full  md:w-full w-80 overflow-hidden  items-center justify-center z-2 p-1" >
          <h1 className="ml-2">Skills</h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              ['HTML', 'bg-[#E44D26]', 'text-white'],
              ['CSS', 'bg-[#264DE4]', 'text-white'],
              ['JavaScript', 'bg-[#F0DB4F]', 'text-black'],
              ['TypeScript', 'bg-[#2E77C6]', 'text-white'],
              ['Lenis', 'bg-[#092E20]', 'text-white'],
              ['locomotive Scroll', 'bg-[#092E20]', 'text-white'],
              ['Tailwind CSS', 'bg-[#38BDF8]', 'text-white'],
              ['React', 'bg-[#61DAFB]', 'text-black'],
              ['Socket.io', 'bg-white', 'text-black'],
              ['Electron.js', 'bg-[#47848F]', 'text-white'],
              ['Firebase', 'bg-[#FFCA28]', 'text-black'],
              ['Supabase', 'bg-green-400', 'text-black'],
              ['MongoDB', 'bg-[#4DB33D]', 'text-white'],
              ['MySQL', 'bg-[#00758F]', 'text-white'],
              ['Next.js', 'bg-black', 'text-white'],
              ['Remix.js', 'bg-[#FDFDFD]', 'text-black'],
              ['Canva', 'bg-[#0CB4D0]', 'text-white'],
              ['Express.js', 'bg-[#373737]', 'text-white'],
              ['EJS', 'bg-[#F2F2F2]', 'text-black'],
              ['Redux', 'bg-[#764ABC]', 'text-white'],
              ['Java', 'bg-[#ED8B00]', 'text-white'],
              ['Spring boot', 'bg-[#72B545]', 'text-white'],
              ['Three.js', 'bg-white', 'text-black'],
              ['GitHub Copilot', 'bg-[#0B0B0B]', 'text-white'],
              ['Gsap', 'bg-[#99F37D]', 'text-zinc-600'],
              ['R', 'bg-[#276DC3]', 'text-white'],
              ['Node.js', 'bg-[#57A646]', 'text-white'],
              ['VS Code', 'bg-[#007ACC]', 'text-white'],
              ['Git', 'bg-[#F05032]', 'text-white'],
              ['Python', 'bg-[#3776AB]', 'text-white'],
              ['C', 'bg-[#00599C]', 'text-white'],
              ['C++', 'bg-[#004482]', 'text-white']
            ]
              .map(([tech, bg, text], i) => (
                <div
                  key={i}
                  className={`sans2 ${bg} ${text} md:px-5 p-4 py-3 md:py-4 rounded-md h-7 text-sm flex items-center justify-center`}
                >
                  {tech}
                </div>
              ))}
          </div>

        </div>

      }





    </div>
  );
}

export default Page3;
