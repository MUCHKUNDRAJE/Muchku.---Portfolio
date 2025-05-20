import React, { useRef } from "react";
import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import { Button } from "../../components/ui/button";

function Page4() {
  const container = useRef(); // for scoping GSAP animations
  const cursorref = useRef();

  const moveCursor = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left - 20; // center of 40px cursor
    const y = e.clientY - bounds.top - 20;
    gsap.to(cursorref.current, {
      x,
      y,
      duration: 0.5,
      ease: "power3",
    });
  };

  const showCursor = () => {
    gsap.to(cursorref.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const hideCursor = () => {
    gsap.to(cursorref.current, {
      opacity: 0,
      scale: 0,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={container}
      className="page2 pixel text-[10vw] px-20 h-screen  py-10 w-full text-white bg-[#111318] relative "
    >
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
        <h1 className="  whitespace-nowrap    text-white">See My Porjects</h1>
        <Button className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-xl ">
          Porject Gallery
        </Button>
      </div>
      <div
        ref={cursorref}
        className=" h-15 w-15  rounded-full bg-white absolute top-0 left-0 opacity-0 "
      >
     <i class="ri-arrow-right-up-line text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black"></i>
      </div>
      <div className="h-full w-full bg-blue-400 overflow-hidden opacity-35 relative">
        <div
          onMouseMove={(e) => moveCursor(e)}
          onMouseEnter={showCursor}
          onMouseLeave={hideCursor}
          class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-0 space-y-0 "
        >
          <div class="break-inside-avoid bg-white  shadow">
            <img
              src="https://i.pinimg.com/736x/c9/1c/2b/c91c2bb18e4d8b62b2533032356b8c83.jpg"
              alt=""
            />
          </div>

          <div class="break-inside-avoid bg-white  shadow">
            <img
              src="https://i.pinimg.com/736x/4a/62/15/4a6215c4463f68dbabb3ac0f3996f289.jpg"
              alt=""
            />
          </div>

          <div class="break-inside-avoid bg-white shadow">
            <img
              src="https://i.pinimg.com/736x/62/23/d6/6223d6f82d5650e92e30e4d62b480177.jpg"
              alt=""
            />
          </div>
          <div class="break-inside-avoid bg-white shadow">
            <img
              src="https://i.pinimg.com/736x/f1/a5/64/f1a5640fe39cb3e00ec09929ad9a8ac5.jpg"
              alt=""
            />
          </div>

          <div class="break-inside-avoid bg-white shadow">
            <img
              className=" object-bottom"
              src="https://i.pinimg.com/736x/9b/0d/b6/9b0db653d4bb583faa3b8c664f3f879f.jpg"
              alt=""
            />
          </div>
          <div class="break-inside-avoid bg-white shadow">
            <img
              src="https://i.pinimg.com/736x/7e/02/6d/7e026dbe4a1566ed75f87c5ef1687359.jpg"
              alt=""
            />
          </div>

          <div class="break-inside-avoid bg-white shadow">
            <img
              src="https://i.pinimg.com/736x/de/91/39/de9139e1bba10963091378ce96b1bf72.jpg"
              alt=""
            />
          </div>

          <div class="break-inside-avoid bg-white shadow">
            <img
              src="https://i.pinimg.com/736x/de/91/39/de9139e1bba10963091378ce96b1bf72.jpg"
              alt=""
            />
          </div>

          <div class="break-inside-avoid bg-white shadow">
            <img
              src="https://i.pinimg.com/736x/8a/ca/6a/8aca6a7b0fe638a719401cb3639affb0.jpg"
              alt=""
            />
          </div>

          <div class="break-inside-avoid bg-white shadow">
            <img
              src="https://i.pinimg.com/736x/28/ac/28/28ac28230c663b2a61098a46796b74d9.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page4;
