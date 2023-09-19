import About from "./About";
import Bio from "./Bio";
import Contact from "./Contact";
import Education from "./Education";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="home" id="home">
      <Hero />
      <Bio />
      <Education />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
