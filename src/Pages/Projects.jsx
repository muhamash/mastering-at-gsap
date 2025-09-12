import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { projects } from "../assets/data/projectImage";
import ProjectCard from "../components/pages/projects/projectCard";

const Projects = () => {
  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".hero");

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { height: "150px", scale: 0.9, opacity: 0.6 },
        {
          height: "500px",
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          duration: 1.2,
          scrollTrigger: {
            trigger: card,
            start: `top+=${i * 200} 70%`, 
            end: "top 20%",
            scrub: true,
          },
        }
      );
    });
  }, { scope: containerRef });

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
            className="hero w-full h-[50px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2 overflow-hidden origin-bottom"
          >
            <ProjectCard image={elem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;