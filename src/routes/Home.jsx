import React, { useEffect, useRef } from 'react';
import Loader from '../components/resuable/Loader';
import Page1 from '../pages/Home/Page1';
import Page2 from '../pages/Home/Page2';
import Nav from '../components/resuable/nav';
import { Button } from '../components/ui/button';
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import Page3 from '../pages/Home/Page3';
import Page4 from '../pages/Home/Page4';
import Page5 from '../pages/Home/Page5';
import Page6 from '../pages/Home/page6';
import Footer from '../pages/Home/footer';
import Exloader from '../components/resuable/exchnage-loader';



function Home() {
  const blobRef = useRef();
   const exloaderTriggerRef = useRef(null);
    const page3Ref = useRef(null);

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
      <Nav onTriggerLoader={() => exloaderTriggerRef.current?.()} />
      <div className="h-screen w-full bg-[#111318] relative ">
        <Exloader triggerRef={exloaderTriggerRef}/>
        <Page1 />
        <Page2 />
        <Page3  ref={page3Ref} />
        <Page5/>
        <Page4 onTriggerLoader={() => exloaderTriggerRef.current?.()} isTrue ={true} />
        <Page6/>
          <Footer onScrollToSkills={() => page3Ref.current?.scrollIntoView({ behavior: 'smooth' })} />
      </div>

    </>
  );
}

export default Home;
