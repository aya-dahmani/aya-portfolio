import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Challenges from "@/components/Challenges";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Challenges />
      <Contact />
      <Footer />
    </>
  );
}