import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import EngineeringApproach from "./components/EngineeringApproach";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollButtons from "./components/ScrollButtons";


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EngineeringApproach/>
        <Experience/>
        <Certificates/>
        <Contact />
        <ScrollButtons/>
      </main>

      <Footer />
    </>
  );
}

export default App;
