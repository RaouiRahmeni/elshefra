import About from "@/sections/About";
import Hero from "@/sections/Hero";
import ServicesSection from "@/sections/Services";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <About />
      <Projects />
    </div>
  );
}
