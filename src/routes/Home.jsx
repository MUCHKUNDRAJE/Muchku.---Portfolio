import React, { useEffect, useRef } from 'react';
import Loader from '../components/resuable/Loader';
import Page1 from '../pages/Home/page1';
import Page2 from '../pages/Home/Page2';
import Nav from '../components/resuable/nav';
import { Button } from '../components/ui/button';
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import Page3 from '../pages/Home/Page3';
import Page4 from '../pages/Home/Page4';
import Page5 from '../pages/Home/Page5';
import Page6 from '../pages/Home/page6';
import Footer from '../pages/Home/footer';
gsap.registerPlugin(MorphSVGPlugin);


function Home() {
  const blobRef = useRef();

  useEffect(() => {
    // Lenis smooth scroll
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

  useEffect(() => {
    // GSAP Blob floating animation
    if (blobRef.current) {
      gsap.to(blobRef.current, {
        x: () => Math.random() * 1000 - 500,
        y: () => Math.random() * 1000 - 500,
        scale: () => 0.9 + Math.random() * 0.2,
        duration: 3,
        repeat: -1,
        repeatRefresh: true, 
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, []);

  

  return (
    <>
      <Loader />
      <Nav />
      <div className="h-screen w-full bg-[#111318] relative ">
        <Page1 />
        <Page2 />
        <Page3/>
        <Page5/>
        <Page4/>
        <Page6/>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
