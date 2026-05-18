import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import Publications from "./components/sections/Publications";
import ProfessionalService from "./components/sections/ProfessionalService";
import ResearchAreas from "./components/sections/ResearchAreas";
import ScrollToTop from "./components/ui/ScrollToTop";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-white font-sans">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Publications />
      <ProfessionalService />
      <ResearchAreas />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
