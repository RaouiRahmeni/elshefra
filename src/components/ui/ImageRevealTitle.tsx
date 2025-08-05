"use client";
import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import img1 from "@/assets/about1.jpg";
import img2 from "@/assets/about2.jpg";
gsap.registerPlugin(ScrollTrigger);

export default function ImageRevealTitle() {
  const textRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const setCardRef = useCallback((el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  }, []);
  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      gsap.set(card, {
        x: (index % 2 === 0 ? -1 : 1) * (20 + Math.random() * 30),
        y: (index % 2 === 0 ? -1 : 1) * (10 + Math.random() * 20),
        rotation: (index % 2 === 0 ? -1 : 1) * (5 + Math.random() * 10),
      });
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          x: (index % 2 === 0 ? -1 : 1) * (20 + Math.random() * 30),
          y: (index % 2 === 0 ? -1 : 1) * (10 + Math.random() * 20),
          rotation: (index % 2 === 0 ? -1 : 1) * (5 + Math.random() * 10),
          scale: 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });
      });
    });
    return () => {
      // Cleanup event listeners
      cardRefs.current.forEach((card) => {
        if (!card) return;
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={textRef}
        className="relative z-10 text-center pointer-events-none"
      >
        <h1 className="text-5xl font-bold text-pink-300 border-b-2 border-l-2 rounded-3xl p-10 relative inline-block">
          Our team,
          <br />
          experts has a laser focus on digital products
          {[img1, img2].map((img, index) => (
            <div
              key={index}
              ref={(el) => setCardRef(el, index)} // Fixed ref usage
              className="absolute rounded-lg overflow-hidden shadow-lg pointer-events-auto -z-1"
              style={{
                width: "120px",
                height: "160px",
                top: `${index === 0 ? "20%" : "60%"}`,
                left: `${index === 0 ? "30%" : "70%"}`,
              }}
            >
              <Image
                src={img}
                alt={`Card ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </h1>
      </div>
    </div>
  );
}
