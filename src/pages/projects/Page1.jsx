import React from "react";
import Nav from "../../components/resuable/nav";
import JourneyCard from "../../components/resuable/JourneyCard";
import ProjectsCards from "../../components/resuable/ProjectsCards";
import ProjectData from "../../database/Projectdata";
import UI from "../../components/resuable/UIgallery";

function Page1() {
  return (
    <>
      <Nav />
      <div className="min-h-screen w-full px-20 py-10 bg-[#111318] text-white pixel">
        <h1 className="text-9xl mt-20 text-center ">Projects</h1>
        <div className="min-h-full w-full flex flex-wrap py-10 gap-20 items-center justify-center  ">
          {ProjectData.map((Projects, index) => (
            <ProjectsCards key={index} data={Projects} />
          ))}
          <UI/>
      
        </div>
      </div>
    </>
  );
}

export default Page1;
