import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function Box ()
{
    
    useGSAP( () =>
    {
        gsap.to( "#gsapBox", {
            x: 1000,
            duration: 2,
            delay: 1
        })
    })

    return (
        <div id="gsapBox" className="h-[300px] w-[300px] rounded-[10px] bg-cyan-700">
      
        </div>
    );
}
