import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollPage() {
  const containerRef = useRef(null);

    useEffect( () =>
    {
        // Lenis setup
        const lenis = new Lenis( {
            duration: 1.2,
            easing: ( t ) => Math.min( 1, 1.001 - Math.pow( 2, -10 * t ) ),
        } );

        function raf ( time )
        {
            lenis.raf( time );
            ScrollTrigger.update();
            requestAnimationFrame( raf );
        }
        requestAnimationFrame( raf );

        // GSAP animations
        const section1 = document.getElementById( "vertical" );
        const colLeft = document.querySelector( ".col_left" );

        const timeline = gsap.timeline( { paused: true } );
        timeline.fromTo(
            colLeft,
            { y: 0 },
            { y: "170vh", duration: 1, ease: "none" },
            0
        );

        ScrollTrigger.create( {
            animation: timeline,
            trigger: section1,
            start: "top top",
            end: "bottom center",
            scrub: true,
        } );

        const section2 = document.getElementById( "horizontal" );
        const boxItems = gsap.utils.toArray( ".horizontal__item" );

        gsap.to( boxItems, {
            xPercent: -100 * ( boxItems.length - 1 ),
            ease: "sine.out",
            scrollTrigger: {
                trigger: section2,
                pin: true,
                scrub: 2,
                start: "top 20%",
                snap: 1 / ( boxItems.length - 1 ),
                end: "+=" + section2.offsetWidth,
            },
        } );

        return () =>
        {
            lenis.destroy();
            ScrollTrigger.getAll().forEach( ( st ) => st.kill() );
        };
    }, [] );

    return (
        <main ref={ containerRef } className="bg-black text-white font-[Slussen] py-30">
            {/* Vertical Section */ }
            <section id="vertical" className="h-[200vh] w-screen">
                <div className="w-[95%] mx-auto">
                    <div className="flex justify-center items-start">
                        <div className="col col_left w-1/2">
                            <h2 className="text-[60px] font-black leading-[85%] uppercase border-l-[3px] border-[#ff98a2] p-6">
                                <span>About</span>
                                <span>Smooth</span>
                                <span>Scroll</span>
                            </h2>
                        </div>
                        <div className="col col_right w-2/5">
                            { [ 1, 2, 3, 4 ].map( ( i ) => (
                                <div
                                    key={ i }
                                    className="vertical__item mb-[240px] last:mb-0"
                                >
                                    <h3 className="text-[20px] font-[Slussen] font-bold tracking-wide uppercase text-[#ff98a2]">
                                        Smooth Scroll Lenis
                                    </h3>
                                    <p>
                                        Lenis is an open-source library built to standardize scroll
                                        experiences and sauce up websites with butter-smooth
                                        navigation, all while using the platform and keeping it
                                        accessible.
                                    </p>
                                </div>
                            ) ) }
                        </div>
                    </div>
                </div>
            </section>

            {/* Horizontal Section */ }
            <section id="horizontal" className="py-[100px]">
                <div className="w-[95%] mx-auto">
                    <div className="horizontal__content flex">
                        { [ 1, 2, 3, 4, 5 ].map( ( num ) => (
                            <div
                                key={ num }
                                className="horizontal__item border border-[#efefef] px-[150px] py-[200px] mr-[50px] last:mr-0"
                            >
                                <div className="horizontal__num text-[80px] font-black font-[Slussen] text-[#ff98a2] uppercase">
                                    { num }
                                </div>
                            </div>
                        ) ) }
                    </div>
                </div>
            </section>
        </main>
    );
}
