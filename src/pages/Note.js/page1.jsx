import React, { useEffect, useRef } from 'react';
import Nav from '../../components/resuable/nav';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { GithubIcon } from 'lucide-react';
import gsap from 'gsap';

function Page1() {
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
        <h1 className="text-white text-5xl pixel">Note.js</h1>
      </div>

      {/* Main Content */}
      <div className="min-h-screen w-full bg-[#111318] py-20 px-6 md:px-16 mb-10 overflow-hidden">
        <h1 className="text-5xl sm:text-7xl md:text-9xl text-center pixel text-white">
          Note.js
        </h1>

        <div className="flex flex-col lg:flex-row items-start justify-center overflow-hidden gap-10 mt-10">
          {/* Image */}
          <div className="w-full lg:w-[40%] h-72 sm:h-96">
            <img
              className="rounded-xl h-full w-full object-cover"
              src="/image/Note.js.png"
              alt="Note.js screenshot"
            />
          </div>

          {/* Description + Tech Stack */}
          <div className="flex flex-col items-start justify-start w-full lg:w-[55%]">
            <div className="sans2 text-white text-base sm:text-lg md:text-2xl mb-4">
              <p>
                Note.js is a powerful and modern desktop note-taking application that extends the
                capabilities of a traditional notepad. Designed for students, professionals, and
                developers, Note.js combines sleek UI with AI-powered customization — allowing users
                to write, format, and even generate their own dashboards using Gemini integration.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                ['React', 'bg-indigo-500', 'text-white'],
                ['Electron.js', 'bg-[#47848F]', 'text-white'],
                ['TypeScript', 'bg-[#2E77C6]', 'text-white'],
                ['Gsap', 'bg-[#99F37D]', 'text-black'],
                ['Tailwind CSS', 'bg-[#38BDF8]', 'text-white'],
                ['Express.js', 'bg-[#373737]', 'text-white'],
                ['Firebase', 'bg-[#FF9200]', 'text-white'],
                ['Socket.io', 'bg-white', 'text-black'],
                ['Motion.js', 'bg-[#FFEB0E]', 'text-black'],
                ['Gemini', 'bg-[#6678CB]', 'text-white'],
                ['Node.js', 'bg-[#57A646]', 'text-white'],
              ].map(([tech, bg, text], i) => (
                <div
                  key={i}
                  className={`sans2 ${bg} ${text} md:px-5 p-4 py-3 md:py-4 rounded-md h-7 text-sm flex items-center justify-center`}
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="flex flex-wrap items-center gap-4">
              <Link to="https://github.com/MUCHKUNDRAJE/Note.js" target="_blank">
                <Button className="bg-white text-black hover:bg-gray-300 px-6">
                  <GithubIcon className="mr-2" /> GitHub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page1;
