import React, { useRef } from "react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

function Footer() {
  const container = useRef(); // for scoping GSAP animations


  return (
    <>
    <div ref={container} className="page7 pixel   h-[100vh] md:px-20   py-10   w-full text-white bg-[#111318] relative  flex items-center justify-center">
         <div className="bg-zinc-900 h-full w-full flex  flex-col  p-10 bg-[url(https://images.unsplash.com/photo-1710036199704-abda5b5471bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] ">
          <div className=" flex-row-reverse items-center md:flex  md:justify-between">
          <div className="text-lg sans2 flex flex-col   ">
            <h1 className="text-2xl pixel">Portfolio</h1> 
            <h1>Skills</h1>
             <h1>Projects</h1>
             <h1>Exprecience</h1> 
          </div>

            <div className="text-lg sans2 flex  flex-col mt-10  ">
            <h1 className="text-2xl pixel">Contact</h1>
           <a href="https://www.linkedin.com/in/muchkund-thote">
             <h1> <i class="ri-linkedin-box-fill"></i> muchkund-thote </h1>
           </a>
            
            <h1><i class="ri-mail-fill"></i> muchkundthote@gmail.com</h1>
           
            
              <a href="https://github.com/MUCHKUNDRAJE">
             <h1><i class="ri-github-fill"></i> MUCHKUNDRAJE</h1> 
           </a>
          </div>

          </div>
  <div className="flex items-center justify-end flex-col mt-28 ">
         <h1 className="text-center text-8xl md:text-[19rem]">Muchku.</h1>
         <p className="text-lg md:-mt-6 mt-1">
          Made with ❤️ caffeine, and a lot of late-night debugging.© 2025 Muchkundraje Thote. All rights reserved. <br />
          {/* If you’ve scrolled this far, we’re basically friends now. Say hi 👉 [your.email@example.com] 👈 */}
          </p>
  </div>

  </div>
    </div>
 
    </>
  );
}

export default Footer;
