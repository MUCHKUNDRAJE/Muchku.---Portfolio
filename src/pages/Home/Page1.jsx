import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger);

function Page1() {
  const container = useRef(); // for scoping GSAP animations

 useGSAP(() => {
  // Intro drop animation
  gsap.to(".visible", {
    opacity: 1,
    duration: 1,
    ease: "power3",
    delay: 5,
    stagger: 0.01,
  });

  gsap.to(".slider2", {
    y: "100%",
    duration: 1,
    delay: 3.5,
    ease: "power3.inOut",
  });

  gsap.to(".name-letter", {
  opacity: 1,
  y: 0,
  duration: 0.5,
  stagger: 0.05,
  delay:3.5,
  ease: "power3.out",
});

gsap.fromTo(
  ".name-letter",
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.05,
    delay: 4,
    ease: "power3.out",
  }
);



  // ScrollTrigger to move slider back up
  gsap.fromTo(
    ".slider",
    { y: "100%" }, // starts from 100% down
    {
      y: "0%", // goes back to top (hidden)
      scrollTrigger: {
        trigger: ".page1",
        start: "top 10%",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
      duration:0.5,
      ease: "power3.inOut",
    }
  );
}, { scope: container });


  return (
    <div ref={container} className="page1 h-full w-full p-20 flex  z-100 bg-[url(https://images.unsplash.com/photo-1710036199704-abda5b5471bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
      <div className="w-[30rem] h-full bg-red-300 relative overflow-hidden   ">

        <div className="slider h-full w-full bg-[#111318] absolute top-0 bg-[url(https://images.unsplash.com/photo-1710036199704-abda5b5471bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] "></div>
          <div className="slider2 h-full w-full bg-[#111318] absolute top-0 bg-[url(https://images.unsplash.com/photo-1710036199704-abda5b5471bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] "></div>
        <img
          className="h-full w-full object-cover"
          src="/image/photo for Website.jpg"
          alt=""
        />
         {/* <div className="slider h-full w-full bg-[#111318] absolute top-0 "></div> */}
      </div>
      <div className="pixel w-[70rem] h-full text-white px-20 py-30 z-10">
        <h1 className="text-5xl">Hello</h1>
        <h2 className="text-7xl">I am 
          { " Muchkundraje  Thote".split("").map((val , index)=>(
            <span key={index} className="name-letter opacity-0 ">
      {val}
     </span>
          ))

          }
              
        </h2>
        <p className="text-3xl">
          {"I am a passionate and  driven individual with a keen interest in exploring creative and technical challenges. With a mindset rooted in innovation and continuous learning, I enjoy working on projects that push boundaries and bring fresh perspectives to problem-solving. I believe that curiosity, resilience, and adaptability are key traits that shape not only great professionals but also impactful individuals in today’s ever-evolving world."
            .split("")
            .map((val, index) => (
              <span key={index} className="visible opacity-0">
                {val}
              </span>
            ))}
        </p>
      </div>
    </div>
  );
}

export default Page1;
