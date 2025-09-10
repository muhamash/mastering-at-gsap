import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from 'react-router';

export default function PageTransition({children}) {
  const pageTransitionRef = useRef();
  const currentPath = useLocation().pathname;
  const pageRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1️⃣ Make overlay visible immediately
    tl.set( pageTransitionRef.current, { display: "flex", } );

    // 2️⃣ Animate stairs in (height from 0 → full)
    tl.from(".stair", {
      height: 0,
      duration: 1,
      ease: "power2.out",
      stagger: {
        amount: 0.3,
        from: "start",
      },
    });

    // 3️⃣ Animate stairs out (move up)
    tl.to(".stair", {
      y: "-100%",
      duration: 1,
      stagger: {
        amount: -0.3,
        from: "end",
      },
      ease: "power2.inOut",
    });

    // 4️⃣ Hide overlay
    tl.set(pageTransitionRef.current, { display: "none" });

    // 5️⃣ Reset stairs for next transition
    tl.set( ".stair", { y: "0%", height: "100%" } );
    
    gsap.from( pageRef.current, {
      opacity: 0,
      delay: 1.5,
      scale: 2
    })
  },[currentPath]);

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

      <div ref={pageRef} className="grow-1">
        { children }
      </div>
    </>
  );
}