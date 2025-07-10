import React from 'react'
import Page1 from '../../pages/Note.js/page1'
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Footer from '../../pages/Home/footer';

import Page2 from '../../pages/Note.js/page2';

function NoteJs() {

  

      useEffect(() => {
            // Lenis smooth scroll
                window.scrollTo(0,0)
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
      <Page1/>
      <Page2/>
     <Footer/>

  </>
  )
}

export default NoteJs