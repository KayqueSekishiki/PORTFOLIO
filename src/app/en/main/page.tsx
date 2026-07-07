import ArrowToTop from "@/components/ArrowToTop/ArrowToTop";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Career from "@/components/Career/Career";
import Projects from "@/components/Projects/Projects";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer/Footer";

export default function Main() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Career />
      <Projects />
      <ContactSection />
      <Footer />
      <ArrowToTop variant="lucide" />
    </div>
  );
}
