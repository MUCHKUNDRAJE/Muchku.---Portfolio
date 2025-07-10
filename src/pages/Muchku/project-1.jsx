import React, { useEffect, useRef } from 'react';
import Nav from '../../components/resuable/nav';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { GithubIcon } from 'lucide-react';

function Project_1() {
  const loaderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(loaderRef.current, {
        y: '-100%',
        duration: 1.2,
        ease: 'power4.inOut',
        delay: 0.5,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Nav isTrue={true} />

      {/* Loader */}
      <div
        ref={loaderRef}
        className="fixed top-0 left-0 w-full h-screen bg-[#111318] z-30 flex flex-col items-center justify-center"
      >
        <p className="text-xl text-white pixel mb-2">Project</p>
        <h1 className="text-white text-5xl pixel">Muchku - Lang</h1>
      </div>

      {/* Main Section */}
      <div className="min-h-screen w-full bg-[#111318] py-20 px-6 sm:px-10 md:px-20">
        <h1 className="text-4xl sm:text-6xl md:text-8xl text-center pixel text-white">
          Muchku-Lang
        </h1>
        <p className="text-center pixel text-sky-200 mt-2 text-sm sm:text-base">In Development Phase</p>

        <div className="flex flex-col lg:flex-row items-start justify-center gap-0 mt-10">
          {/* Image */}
          <div className="w-full lg:w-[30%] max-w-md mx-auto">
            <img
              className="rounded-xl w-full h-64 sm:h-80 object-cover"
              src="/image/MK.png"
              alt="Muchku-Lang"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5 justify-center w-full lg:w-[60%]">
            <div className="sans2 text-white text-base sm:text-lg md:text-2xl">
              <p>
                Muchku is a coding language — a custom programming language built in C. It is a toy
                language created for learning how compilers work — from lexing to parsing, code
                generation, and execution. Using this language, you can create classic Windows
                software.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              <span className="sans2 bg-[#085E9F] text-white px-4 py-1 rounded-md text-sm">
                C - Language
              </span>
            </div>

            {/* Button */}
            <div className="flex items-center gap-6 mt-4">
              <Link to="https://github.com/MUCHKUNDRAJE/Note.js" target="_blank">
                <Button className="bg-white text-black hover:text-white px-6">
                  <GithubIcon className="mr-2" />
                  Github
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project_1;
