import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from 'react';

export default function Box ()
{
    const gsapRef = React.useRef();

    useGSAP( () =>
    {
        // gsap.to( "#gsapBox", {
        //     x: 1000,
        //     duration: 2,
        //     delay: 1
        // })

        gsap.to( gsapRef.current, {
            x: 1000,
            duration: 2,
            delay: 1
        } );
    } );
    


    return (
        <div id="gsapBox" ref={gsapRef} className="h-[300px] w-[300px] rounded-[10px] bg-cyan-700">
      
        </div>
    );
}
