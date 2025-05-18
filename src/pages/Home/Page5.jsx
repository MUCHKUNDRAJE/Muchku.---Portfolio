import React, { useRef } from "react";


import { Button } from "../../components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger);


function Page5() {
  const container = useRef(); // for scoping GSAP animations

  //  useGSAP(()=>{
  //    gsap.to(".exp-description",{
  //     scrollTrigger:{
  //       trigger:".page5",
  //       start:"top top",
  //       end:"bottom bottom",
  //       // markers:true
  //       scrub:6
  //     },
  //     autoAlpha: 1,
  //     opacity:90,
  //     stagger:30,
  //     duration:10,
  //     ease:"power2"
  //    })
  //  })

   


  return (
    <div
      ref={container}
      className="page5 pixel text-[4vw] px-20  h-screen  py-10 w-full text-white bg-[#111318] relative "
    >
      <h1 className="text-8xl mb-7"> Experience</h1>

      <div className=" w-[50rem]">
        <h2 className="text-4xl pixel"> Intern - Vectortek Labs Pvt Ltd </h2>
        <h1 className="text-sm sans2 text-blue-300 opacity-60">Currently Working</h1>

        <p className="text-lg sans2 ">
          {" I designed and developed dynamic, responsive user interfaces usingRemix.js, ensuring a seamless and intuitive user experience acrossdevices. On the backend, I implemented RESTful APIs and business logic with Spring Boot, focusing on clean architecture and scalability. Byeffectively integrating the frontend with backend services, I optimized the application's performance, resulting in faster load times and smoother interactions."
  .split("")
  .map((val, index) => (
    <span key={index} className="exp-description opacity-40">
      {val}
    </span>))}
        </p>
      </div>

      <div className=" sans2 mt-10 w-[40rem] text-white right-20 absolute flex items-start justify-start flex-col  ">
        <h2 className="pixel text-4xl whitespace-nowrap">
          Web Developer – Enginneering India Club YCCE
        </h2>

        <p className="text-lg ">
       {"Led the design and launch of the official club website, focusing on user-friendly navigation and responsive design. Collaborated closely with two core team members to implement event-related features, ensuring real-time updates and a smooth user experience for visitors and club members alike"
  .split("")
  .map((val, index) => (
    <span key={index} className="exp-description opacity-40 ">
      {val}
    </span>
))}
 </p>
        <a className="-mt-7" href="https://www.engineeringindiaycce.live/">
        
        <Button className=" bg-white text-black hover:text-white">Visit EI website</Button>
        </a>
      </div>
    </div>
  );
}

export default Page5;
