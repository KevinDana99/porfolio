import About from "@/components/sections/About";
import Certification from "@/components/sections/Certification";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <ProjectsSection />
      <Certification />
      <Testimonials />
    </>
  );
}
