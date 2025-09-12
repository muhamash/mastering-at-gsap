import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Apple } from 'lucide-react';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
  const container = useRef();
  const cardsWrapper = useRef();

  const scrollAnimationData = [
    { title: "Apple", text: "Lorem ipsum dolor sit amet...", icon: <Apple className="w-full h-full object-cover" /> },
    { title: "Banana", text: "Ut enim ad minim veniam...", icon: <Apple className="w-full h-full object-cover" /> },
    { title: "Cherry", text: "Duis aute irure dolor in...", icon: <Apple className="w-full h-full object-cover" /> },
    { title: "Date", text: "Excepteur sint occaecat...", icon: <Apple className="w-full h-full object-cover" /> },
    { title: "Elderberry", text: "Sed ut perspiciatis unde...", icon: <Apple className="w-full h-full object-cover" /> },
  ];

  useEffect(() => {
    const cards = gsap.utils.toArray(".card");
    cards.forEach((card) => {
      const fullHeight = card.scrollHeight;

      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          cards.forEach(c => gsap.to(c, { height: 130, duration: 0.5 }));
          gsap.to(card, { height: fullHeight, duration: 0.5 });
        },
        onEnterBack: () => {
          cards.forEach(c => gsap.to(c, { height: 130, duration: 0.5 }));
          gsap.to(card, { height: fullHeight, duration: 0.5 });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={container} className="flex flex-col items-center w-full">
      {/* Intro Section */}
      <div className="h-screen flex items-center justify-center bg-gray-100 w-full">
        <h1 className="text-4xl font-bold">Scroll down to see the animation</h1>
      </div>

      {/* Cards */}
      <div ref={cardsWrapper} className="cards-wrapper bg-neutral-800 text-white w-full">
        {scrollAnimationData.map((data, idx) => (
          <div
            key={idx}
            className="card p-6 border-b border-white/50 overflow-hidden"
            style={{ height: 130 }}
          >
            <div className="flex gap-4 items-center h-32">
              <h1 className="text-xl opacity-80">{idx + 1}</h1>
              <h2 className="text-3xl">{data.title}</h2>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="w-[450px] opacity-70">{data.text}</p>
              <div className="w-56 h-56">{data.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Outro Section */}
      <div className="h-screen flex items-center justify-center bg-gray-100 w-full">
        <h1 className="text-4xl font-bold">All done!</h1>
      </div>
    </div>
  );
}
