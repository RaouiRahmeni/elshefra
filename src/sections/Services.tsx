"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import meeting from "@/assets/meeting.jpg";
import { Paintbrush, Code, Lightbulb } from "lucide-react";

const services = [
  {
    icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
    title: "Strategy & Discovery",
    description:
      "We help you define a clear roadmap and align your vision with your users' needs.",
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-pink-500" />,
    title: "UX/UI Design",
    description:
      "We craft intuitive interfaces that are both beautiful and conversion-focused.",
  },
  {
    icon: <Code className="w-8 h-8 text-blue-500" />,
    title: "Development",
    description:
      "From front-end to back-end, we build performant, scalable digital products.",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Proper typed callback for ref assignment
  const setServiceRef = (index: number) => (el: HTMLDivElement | null) => {
    serviceRefs.current[index] = el;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax effect
      if (parallaxRef.current) {
        gsap.to(parallaxRef.current, {
          y: 100,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Service card animations
      serviceRefs.current.forEach((card, i) => {
        if (!card) return;

        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: i * 0.1,
        });

        // Hover effect
        const onEnter = () => gsap.to(card, { y: -10, duration: 0.3 });
        const onLeave = () => gsap.to(card, { y: 0, duration: 0.3 });

        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);

        return () => {
          card.removeEventListener("mouseenter", onEnter);
          card.removeEventListener("mouseleave", onLeave);
        };
      });

      // Title animation
      gsap.from(".section-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh] overflow-hidden py-20"
    >
      {/* Parallax background */}
      <div ref={parallaxRef} className="absolute inset-0 -z-10 opacity-20 ">
        <Image
          src={meeting}
          alt="Team meeting"
          fill
          className="object-cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="section-title text-4xl font-bold mb-4">Services</h2>
          <p className="section-title text-gray-600">
            Ranging from big ideas to fine details, we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={setServiceRef(index)}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-300 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
