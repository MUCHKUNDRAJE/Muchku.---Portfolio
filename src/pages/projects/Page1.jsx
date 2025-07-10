import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Nav from "../../components/resuable/nav";
import JourneyCard from "../../components/resuable/JourneyCard";
import ProjectsCards from "../../components/resuable/ProjectsCards";
import ProjectData from "../../database/Projectdata";
import UI from "../../components/resuable/UIgallery";
import { useNavigate } from "react-router-dom";

function Page1() {
  const loaderRef = useRef(null);
    const projectRef = useRef(null);
  const navigate = useNavigate()
   const [loaderVaibale, setloaderVaibale] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(loaderRef.current, {
        y: "-100%",
        duration: 1.2,
        ease: "power4.inOut",
        delay: 0.5,
      });
    });
    return () => ctx.revert(); // clean up
  }, []);

 
 const setloaderVariable  = (index) =>{
  setloaderVaibale(ProjectData[index].name)

   gsap.fromTo(
  projectRef.current,
  { opacity: 1, y: 1000 },
  {
    opacity: 1,
    y: 0,
    duration: 1.6,
    ease: 'power4.out',
    onComplete: () => {
      setTimeout(() => {
        navigate(`${ProjectData[index].link}`);
      }, 500);
    },
  }
);

 }
 useEffect(()=>{
  console.log(loaderVaibale)
 },[loaderVaibale])

  return (
    <>
      {/* Exloader */}
      <div
        ref={loaderRef}
        className="fixed top-0 left-0 w-full h-screen bg-[#111318] z-30 flex-col flex items-center justify-center"
      >
         <h1 className="text-white text-5xl pixel"> Projects </h1>
      </div>

        <div
        ref={projectRef}
        className="fixed top-0 left-0 w-full h-screen bg-[#111318] z-30 flex-col flex items-center justify-center opacity-0 pointer-events-none "
      >   
          <p className="text-xl text-white pixel mb-2 " >Project</p>
         <h1 className="text-white text-5xl pixel"> {loaderVaibale} </h1>
      </div>

      {/* Main Page Content */}
      <Nav isTrue = {true} />
      <div className="min-h-screen w-full md:px-20 md:py-10 bg-[#111318] text-white pixel overflow-hidden">
        <h1 className="md:text-9xl mt-20 text-center text-5xl ">Projects</h1>
        <div className="min-h-full w-full flex flex-wrap md:py-10  md:gap-20 items-center justify-center">
          {ProjectData.map((Projects, index) => (
            <div key={index}  onClick={() => setloaderVariable(index) }>
                  <ProjectsCards key={index} data={Projects} />
              </div>
          ))}
          <UI />
        </div>
       

       
       
      </div>
    </>
  );
}

export default Page1;
