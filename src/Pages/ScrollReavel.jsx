 
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollReveal } from "../assets/data/scrollReveal";

export default function ScrollReveal() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.utils.toArray(".slider .image").forEach((img) => {
      gsap.fromTo(
        img,
        {
          clipPath: "inset(0% 100% 0% 0% 25px)",
        },
        {
          clipPath: "inset(0% 0% 0% 0% 25px)", 
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 80%", // when img top hits 80% viewport
            end: "top 20%",   // fully animate by the time it hits 20%
            scrub: true,
          },
        }
      );
    });
  });

  return (
    <div className="bg-black text-white py-96">
      {scrollReveal.map((data, i) => (
        <div
          key={i}
          className="slider flex flex-col justify-center items-center md:flex-row border-b border-white/50 p-3 min-h-[300px]"
        >
          <div className="w-[40%] text-4xl md:self-end p-8">
            <h1>{data?.title}</h1>
          </div>
          <div className="w-[60%] h-[400px]">
            <div
              style={{
                backgroundImage: `url(${data?.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full h-full image rounded-2xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
