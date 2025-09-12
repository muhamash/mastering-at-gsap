/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { projects } from "../assets/data/projectImage";
import ProjectCard from "../components/pages/projects/projectCard";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".hero");

      // Create a timeline controlled by scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",         // when container hits top of viewport
          end: "+=" + cards.length * 600, // extend scroll distance based on # of cards
          scrub: true,
          pin: true,                // keeps section pinned during animation
          markers: false,           // set true for debugging
        },
      });

      // Animate each card sequentially
      cards.forEach((card, i) => {
        tl.fromTo(
          card,
          { height: "50px" },
          { height: "500px", duration: 1, ease: "power2.out" },
          "+=0.3" // small delay between each expansion
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="lg:p-4 p-2 mb-[100vh]">
      <div className="pt-[45vh]">
        <h2 className="font-[font2] lg:text-[9.5vw] text-5xl sm:text-6xl md:text-7xl uppercase">
          Projects
        </h2>
      </div>

      <div className="mt-10 space-y-6">
        {projects.map((elem, idx) => (
          <div
            key={idx}
            className="hero w-full h-[50px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2 overflow-hidden"
          >
            <ProjectCard image={elem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
