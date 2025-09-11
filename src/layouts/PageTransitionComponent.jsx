import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useLocation } from 'react-router';

gsap.registerPlugin( ScrollTrigger );
// ScrollTrigger.refresh();

export default function PageTransition({children}) {
  const pageTransitionRef = useRef();
  const currentPath = useLocation().pathname;
  const pageRef = useRef();

  useGSAP( () =>
  {
    const tl = gsap.timeline( {
      defaults: { ease: "power2.inOut" },
      onComplete: () =>
      {
        // Refresh ScrollTrigger after DOM is stable
        requestAnimationFrame( () => ScrollTrigger.refresh() );
      },
    } );

    // Make overlay visible immediately
    tl.set( pageTransitionRef.current, { display: "flex", } );

    //  Animate stairs in (height from 0 → full)
    tl.from( ".stair", {
      height: 0,
      duration: 0.9,
      ease: "power2.out",
      stagger: {
        amount: 0.5,
        from: "start",
      },
    } );

    // Animate stairs out 
    tl.to( ".stair", {
      y: "100%",
      duration: 0.8,
      stagger: {
        amount: -0.3,
        from: "start",
      },
      ease: "power2.inOut",
    } );

    //  Hide overlay
    tl.set( pageTransitionRef.current, { display: "none" } );

    // Reset stairs for next transition
    tl.set( ".stair", { y: "0%", height: "100%" } );

    gsap.from( pageRef.current, {
      opacity: 0,
      delay: 2,
      scale: 3,
      onComplete: () => ScrollTrigger.refresh(),
      clearProps: "all",
    } );

    // cleanup timeline
    return () =>
    {
      tl.kill(); 
    };
    
  }, [ currentPath ] );

  return (
    <>
      <div
        ref={ pageTransitionRef }
        className="w-full h-screen fixed flex top-0 left-0 z-50"
      >
        <div className="stair h-full w-1/6 bg-pink-700"></div>
        <div className="stair h-full w-1/6 bg-green-700"></div>
        <div className="stair h-full w-1/6 bg-cyan-700"></div>
        <div className="stair h-full w-1/6 bg-black"></div>
        <div className="stair h-full w-1/6 bg-rose-700"></div>
        <div className="stair h-full w-1/6 bg-violet-700"></div>
      </div>

      <div ref={ pageRef } className="grow-1">
        { children }
      </div>
    </>
  );
}