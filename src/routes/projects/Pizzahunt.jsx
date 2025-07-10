import React, { useEffect } from 'react'
import Project_1 from '../../pages/Muchku/project-1'
import Page1 from '../../pages/pizzaHunt/Page1'
import Page2 from '../../pages/pizzaHunt/page2'
import ProjectShow from '../../components/resuable/project.-show'
import Lenis from '@studio-freight/lenis'
import Page3 from '../../pages/pizzaHunt/page3'
import Footer from '../../pages/Home/footer'


function Pizzahunt() {




  useEffect(() => {
    // Lenis smooth scroll
    window.scrollTo(0, 0)
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
      <Page1 />
      <Page2 />
      <Page3 />
      <Footer />



    </>
  )
}

export default Pizzahunt