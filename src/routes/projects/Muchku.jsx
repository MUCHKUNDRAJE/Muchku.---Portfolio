import React ,{useEffect}from 'react'
import Project_1 from '../../pages/Muchku/project-1'
import Lenis from '@studio-freight/lenis';
import Project_2 from '../../pages/Muchku/project-2';
import Footer from '../../pages/Home/footer';


 


function ProGallery() {

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
    <div>
         
         <Project_1/>
         <Project_2/>
          <Footer/>
 
    </div>
  )
}

export default ProGallery