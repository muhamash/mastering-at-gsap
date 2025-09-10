import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { imageArray } from "../assets/data/agencyImages";

export default function Agency ()
{
    const imageDivRef = React.useRef( null )
    const imageRef = React.useRef( null );
    
    // const { contextSafe } = useGSAP();
    // const scrollAnimation = contextSafe( () =>
    // {
    //     gsap.to( imageDivRef.current, {
    //         x: 500
    //     })
    // })

    gsap.registerPlugin(ScrollTrigger)

    useGSAP( () =>
    {
        gsap.to( imageDivRef.current, {
            scrollTrigger: {
                trigger: imageDivRef.current,
                // markers: true,
                start: "top 25%",
                end: "top -70%",
                pin: true,
                onUpdate: ( elem ) =>
                {
                    let imageIndex;
                    if ( elem.progress < 1 )
                    {
                        imageIndex = Math.floor( elem.progress * imageArray.length )
                    } else
                    {
                        imageIndex = imageArray.length - 1
                    }
                    imageRef.current.src = imageArray[ imageIndex ]
                }
            }
        } )
    } );

    return (
        <div className="py-100">
            <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-96 -top-80 lg:left-[30vw] left-[30vw]'>
                <img ref={imageRef} className='h-full object-cover w-full' src="https://res.cloudinary.com/dn2yoh990/image/upload/v1757493219/IMG_6716_v2gdhv.png" alt="" />
            </div>

            <div className='relative'>
                <div className='lg:mt-[50vh] mt-[25vh]'>
                    <h1 className='text-[15vw] text-center uppercase leading-[15vw]'>
                        Full-stack  <br /> Software developer
                    </h1>
                </div>
                <div className='lg:pl-[40%] lg:mt-20 mt-4 p-3'>
                    <p className='lg:text-5xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis rem quidem fugit nulla sit, explicabo consectetur quis ut voluptatem tempore ipsa soluta qui amet laborum minus facilis reprehenderit cupiditate maiores quasi. Velit nam, quasi laudantium voluptates necessitatibus facere? Numquam?</p>
                </div>
            </div>
        </div>
    );
}
