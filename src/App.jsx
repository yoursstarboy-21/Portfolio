import { useEffect, useState } from "react";
import BottomNav from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import StarBackground from "./components/StarBackground";
import "./styles.css";

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      className={`scroll-top ${show ? "visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}

function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function App() {
  useFadeIn();
  return (
    <>
      <StarBackground />
      <Hero />
      <div className="gline" />
      <About />
      <div className="gline" />
      <Education />
      <div className="gline" />
      <Skills />
      <div className="gline" />
      <Certificates />
      <div className="gline" />
      <Projects />
      <div className="gline" />
      <Contact />
      <BottomNav />
      <ScrollTop />
    </>
  );
}