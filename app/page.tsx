import BlogSection from "./components/blog/BlogSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import ProjectListing from "./components/Projects/ProjectCard";
import SkillsetSection from "./components/skillsets/SkillsetSection";
import TestimonialsComponent from "./components/Testimonials";

export default function Home() {

  return (
    <section className="w-full h-auto p-8  mx-auto flex flex-col">
      <HeroSection />
      <ProjectListing />
      <SkillsetSection />
      <BlogSection />
      <TestimonialsComponent />

      <div id="contact">
        <ContactSection />
      </div>
    </section>
  );
}
