"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import ImageCard from "@/components/ui/ImageCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string;
  description: string;
  tags: string[];
  year: string;
  images: string[];
};

const projects: Project[] = [
  {
    title: "OTIF",
    description: "A full-featured online Import and export company website.",
    tags: ["React", "Node.js", "MongoDB"],
    year: "2022",
    images: ["/images/otif/image1.jpg"],
  },
  {
    title: "Watersec",
    description: "CRM system for a water tracking company.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    year: "2024",
    images: ["/images/watersec/image1.JPG"],
  },
  {
    title: "Fatoura",
    description: "Digital invoice tool.",
    tags: ["TypeScript", "Firebase", "React DnD"],
    year: "2024",
    images: ["/images/fatoura/image1.JPG"],
  },
  {
    title: "Netrifish",
    description: "ERP system to manage HR and stock.",
    tags: ["React", "Bootstrap", "MongoDB"],
    year: "2023",
    images: ["/images/netrifish/image1.png"],
  },
  {
    title: "Badran ERP",
    description: "ERP for a gold factory.",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    year: "In development",
    images: ["/images/badran/badranlogo.jpg"],
  },
];

const Page = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !scrollRef.current) return;

    const ctx = gsap.context(() => {
      const scrollWidth = scrollRef.current!.scrollWidth;
      const containerWidth = sectionRef.current!.offsetWidth;

      gsap.to(scrollRef.current, {
        x: () => `-${scrollWidth - (containerWidth - 100)}px`,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-black text-white">
      <div
        ref={sectionRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <div ref={scrollRef} className="flex gap-10 px-10 py-20 w-max">
          {projects.map((project, index) => (
            <div key={index} className="w-[40vw]">
              <ImageCard
                images={project.images}
                title={project.title}
                desc={project.description}
                tags={project.tags}
                year={project.year}
              />
            </div>
          ))}
        </div>

        <div className="py-20 text-center">
          <p className="text-white/90 mb-4">
            Want to see more? Or have a project in mind?
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow hover:bg-indigo-100 transition"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
