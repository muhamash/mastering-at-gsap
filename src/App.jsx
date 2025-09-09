import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from 'react';
import './App.css';
import Box from './components/Box';
import GsapBox from './components/gsapBoxAndCircle/GsapBox';
import GsapCircle from './components/gsapBoxAndCircle/GsapCircle';
import GsapClickContainer from "./components/gsapClick/gsapClickContainer";

function App ()
{
  const gsapRef = React.useRef();

  useGSAP( () =>
  {
    // gsap.from( "#gsapBox", {
    //   y: 300,
    //   opacity: 0,
    //   rotate: 360,
    //   duration: 1,
    //   delay: 1
    // } );

    gsap.from( gsapRef.current, {
      opacity: 0,
      rotate: 360,
      duration: 1,
      delay: 1,
      scale:0
    } );
  } ,{scope: "#gsapScope"});

  return (
    <main className="flex flex-col gap-30 py-30">

      <Box />
      
      <div>


        <div className="flex items-center justify-evenly pb-50">

          <div id="gsapScope" className="flex flex-col border-2 border-green-500 rounded-3xl p-10">
            <GsapCircle />
            <GsapBox ref={gsapRef}/>
          </div>

          <div className="flex flex-col">
            <GsapCircle />
            <GsapBox/>
          </div>
        </div>

        <GsapClickContainer/>
      </div>
    </main>
  );
}

export default App