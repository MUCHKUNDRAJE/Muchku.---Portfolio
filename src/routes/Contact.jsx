import React, { useRef } from 'react';
import Loader from '../components/resuable/Loader';
import Page1 from '../pages/Home/Page1';
import Page2 from '../pages/Home/Page2';
import Nav from '../components/resuable/nav';
import { Button } from '../components/ui/button';
import Lenis from "@studio-freight/lenis";


import Footer from '../pages/Home/footer';
import Exloader from '../components/resuable/exchnage-loader';



function Contact() {
 
   const exloaderTriggerRef = useRef(null);
    const page3Ref = useRef(null);


 

  

  return (
    <>
    
     <Nav onTriggerLoader={() => exloaderTriggerRef.current?.()} />
      <div className="h-screen w-full bg-[#111318] relative ">
        <Exloader triggerRef={exloaderTriggerRef}/>
          <Footer onScrollToSkills={() => page3Ref.current?.scrollIntoView({ behavior: 'smooth' })} />
      </div>

    </>
  );
}

export default Contact;
