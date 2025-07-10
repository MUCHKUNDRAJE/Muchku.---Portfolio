import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

function Exloader({ triggerRef }) {
  const loaderRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (triggerRef) {
      triggerRef.current = () => {
        gsap.fromTo(
          loaderRef.current,
          { opacity: 1, y: 1000 },
          {
            opacity: 1,
            y: 0,
            duration: 1.6,
            ease: 'power4.out',
            onComplete: () => {
              // Wait a little after animation if you want (optional)
              setTimeout(() => {
                navigate('/projects'); // ✅ replace with your actual route
              }, 500);
            },
          }
        );
      };
    }
  }, [triggerRef, navigate]);

  return (
    <div
      ref={loaderRef}
      className="exloader h-screen w-[25.3rem]  md:w-screen  fixed  bg-[#111318] z-50 flex opacity-0 items-center -ml-2 justify-center  pointer-events-none"
    >
      <h1 className="text-white text-5xl pixel">Projects</h1>
     
    </div>
  );
}

export default Exloader;
