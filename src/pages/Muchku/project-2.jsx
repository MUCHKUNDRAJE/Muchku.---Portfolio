import React from 'react';

function Project_2() {
  return (
    <div className="min-h-screen w-full bg-[#111318] px-4 sm:px-10 md:px-20 py-10 pixel hidden md:block">
      {/* Heading */} 
      <h1 className="text-center text-white text-4xl sm:text-6xl md:text-8xl mb-6">
        Architecture
      </h1>

      {/* Image Container */}
      <div className="bg-red-300 w-full rounded overflow-hidden ">
        <img
          className="rounded w-full h-auto object-cover"
          src="/image/Muchku (2).png"
          alt="Architecture Diagram"
        />
      </div>
    </div>
  );
}

export default Project_2;
