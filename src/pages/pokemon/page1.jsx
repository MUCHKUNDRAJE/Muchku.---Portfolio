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
      {/* Loader Animation */}
      <div
        ref={loaderRef}
        className="fixed top-0 left-0 w-full h-screen bg-[#111318] z-30 flex flex-col items-center justify-center"
      >
        <p className="text-xl text-white pixel mb-2">Project</p>
        <h1 className="text-white text-5xl pixel">Pokemon Dlc</h1>
      </div>

      <Nav isTrue={true} />

      {/* Main Content */}
      <div className="min-h-screen w-full bg-[#111318] py-20 px-6 md:px-16">
        <h1 className="text-5xl sm:text-7xl md:text-9xl text-center pixel text-white">
          Pokemon Dlc
        </h1>
        <h2 className="text-center pixel text-sky-200 text-lg sm:text-xl mb-6">
          In Development Phase
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-10">
          {/* Image */}
          <div className="w-full lg:w-[37%] h-64 sm:h-96">
            <img
              className="rounded-xl h-full w-full object-cover"
              src="/image/Pokemon Dlc.png"
              alt="Pokemon Dlc Preview"
            />
          </div>

          {/* Description & Tags */}
          <div className="flex flex-col  w-full lg:w-[55%]">
            <div className="sans2 text-white text-base sm:text-lg md:text-2xl mb-4">
              <p>
                Pokémon Multiplayer Game is a real-time, browser-based multiplayer experience
                inspired by the classic Pokémon franchise. This game allows multiple players to
                explore a shared map, interact with each other, and enjoy a nostalgic yet dynamic
                adventure with custom features and mechanics.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8 w-full">
              {[
                ['ejs', 'bg-[#93AC40]', 'text-white'],
                ['JavaScript', 'bg-[#FDD942]', 'text-[#080808]'],
                ['Gsap', 'bg-[#99F37D]', 'text-zinc-600'],
                ['Tailwind CSS', 'bg-[#38BDF8]', 'text-white'],
                ['Express.js', 'bg-[#373737]', 'text-white'],
                ['Socket.io', 'bg-white', 'text-black'],
                ['Html Canvas', 'bg-[#D75B3F]', 'text-white'],
                ['Node.js', 'bg-[#57A646]', 'text-white'],
                ['Tiled Map Editor', 'bg-[#656FE3]', 'text-white'],
              ].map(([tech, bg, text], index) => (
                <div
                  key={index}
                  className={`sans2 ${bg} ${text} md:px-5 p-4 py-3 md:py-4 rounded-md h-7 text-sm flex items-center justify-center`}
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* GitHub Button */}
            <div className="flex flex-wrap items-center gap-6">
              <Link
                to="https://github.com/MUCHKUNDRAJE/-OIBSIP"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-black hover:bg-gray-300 px-6">
                  <GithubIcon className="mr-2" />
                  GitHub
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
