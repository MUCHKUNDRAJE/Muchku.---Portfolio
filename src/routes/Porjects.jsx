import React , {useEffect} from 'react'
import Page1 from '../pages/projects/Page1'
import Lenis from '@studio-freight/lenis';

function Porjects() {

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
  return (
    <div>
          <Page1/>


    </div>
  )
}

export default Porjects