import React, { useEffect, useRef } from "react";
import Nav from "../../components/resuable/nav";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { GithubIcon } from "lucide-react";
import Card from "../../components/resuable/Card";
import DesignCard from "../../components/resuable/designCard";
import Lenis from "@studio-freight/lenis";
import Footer from "../../pages/Home/footer";
import design from "../../database/designdata";
function UIgallery() {
  const loaderRef = useRef(null);

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

  useEffect(() => {
    // Lenis smooth scroll
    window.scrollTo(0, 0);
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Nav isTrue={true} />

      <div
        ref={loaderRef}
        className="fixed top-0 left-0 w-full h-screen bg-[#111318] z-30 flex-col flex items-center justify-center"
      >
        <p className="text-xl text-white pixel mb-2">Project</p>
        <h1 className="text-white text-5xl pixel"> My Design Gallery </h1>
      </div>
      <div className="min-h-screen w-full bg-[#111318] py-20  px-2 md:px-20 ">
        <h1 className="text-5xl md:text-9xl text-center pixel text-white">
          My Design Gallery
        </h1>

        <div className="min-h-screen w-full items-center justify-center flex flex-wrap gap-5 mt-4  p-2">
          {design.map((designs, index) => (
            <DesignCard key={index} src={designs.url} name={designs.name} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UIgallery;
