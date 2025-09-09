import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from "react";

export default function GsapClickContainer() {
  const [circle, setCircle] = React.useState(0);
  const [rotate, setRotate] = React.useState(0);

  const { contextSafe } = useGSAP();

  const animationOnClick = contextSafe(() => {
    gsap.to("#circleDiv", {
      rotate: rotate,
      x: circle,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  return (
    <div className="flex flex-col gap-20 justify-center items-center">
      <button
        onClick={() => {
          // generate fresh randoms every click
          const randomX = gsap.utils.random(-200, 200, 1);
          const randomRotate = gsap.utils.random(-180, 180, 1);

          setCircle(randomX);
          setRotate(randomRotate);

          // call the animation function
          animationOnClick();
        }}
        className="bg-violet-500 text-white px-5 py-2 duration-200 ease-in-out rounded-4xl active:scale-75"
      >
        Animate circle
      </button>

      <div
        id="circleDiv"
        className="bg-red-600 w-[200px] h-[200px] rounded-2xl"
      ></div>
    </div>
  );
}
