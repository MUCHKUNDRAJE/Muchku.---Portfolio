import React, { useEffect, useRef } from 'react';
import Nav from '../../components/resuable/nav';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { GithubIcon, Linkedin } from 'lucide-react';
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
        className="fixed top-0 left-0 w-full h-screen bg-[#111318] z-30 flex-col flex items-center justify-center"
      >
        <p className="text-xl text-white pixel mb-2">Project</p>
        <h1 className="text-white text-5xl pixel">PizzaHunt</h1>
      </div>

      {/* Main Content */}
      <div className="min-h-screen w-full bg-[#111318] py-20 px-6 md:px-16">
        <h1 className="text-5xl sm:text-7xl md:text-9xl text-center pixel text-white">
          PizzaHunt
        </h1>

        <div className="flex flex-col lg:flex-row items-start justify-center gap-10 mt-10">
          {/* Image */}
          <div className="w-full lg:w-[40%] h-72 sm:h-96">
            <img
              className="rounded-xl h-full w-full object-cover"
              src="/image/Pizza hunt.png"
              alt="PizzaHunt screenshot"
            />
          </div>

          {/* Description and Tech Stack */}
          <div className="flex flex-col items-start w-full lg:w-[55%]">
            <div className="sans2 text-white text-base sm:text-lg md:text-2xl mb-4">
              <p>
                PizzaHunt is a full-stack web application that lets users create and order custom
                pizzas while providing an admin dashboard for managing inventory and order status.
                This project demonstrates a seamless user experience and efficient backend
                management.
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-8 w-full">
              {[
                ['React', 'bg-indigo-500', 'text-white'],
                ['JavaScript', 'bg-[#FDD942]', 'text-[#080808]'],
                ['Gsap', 'bg-[#99F37D]', 'text-zinc-600'],
                ['Tailwind CSS', 'bg-[#38BDF8]', 'text-white'],
                ['Express.js', 'bg-[#373737]', 'text-white'],
                ['Mongo DB', 'bg-[#00F065]', 'text-[#001E2B]'],
                ['Socket.io', 'bg-white', 'text-black'],
                ['Motion.js', 'bg-[#FFEB0E]', 'text-black'],
                ['Razorpay', 'bg-[#6678CB]', 'text-white'],
                ['Node.js', 'bg-[#57A646]', 'text-white'],
              ].map(([tech, bg, text], i) => (
                <div
                  key={i}
                  className={`sans2 ${bg} ${text}  md:px-5 p-4 py-3 md:py-4  rounded-md h-7 text-sm flex items-center justify-center`}
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-6 mt-2">
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

              <Link
                to="https://www.linkedin.com/posts/muchkund-thote_fullstackdevelopment-reactjs-nodejs-activity-7267511169559453699-wgqZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEX5yY8BMKt_lMJlMXTXoYR89r0r_90tD0c"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-black hover:bg-gray-300 px-6">
                  <Linkedin className="mr-2" />
                  LinkedIn
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
