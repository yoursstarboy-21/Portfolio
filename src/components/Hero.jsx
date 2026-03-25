import { useState, useEffect } from "react";
import Terminal from "./Terminal";

const roles = [
  "AI Engineer",
  "Front End Developer",
  "MERN Stack Developer",
  "Database Developer",
  "Technology Enthusiast"
];

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let ticker;
    const currentRole = roles[loopNum % roles.length];
    
    // Typing and deleting speeds
    const typingSpeed = 100;
    const deletingSpeed = 50;
    
    if (isDeleting) {
      ticker = setTimeout(() => setText(currentRole.substring(0, text.length - 1)), deletingSpeed);
    } else {
      ticker = setTimeout(() => setText(currentRole.substring(0, text.length + 1)), typingSpeed);
    }

    // Pause when full word is typed
    if (!isDeleting && text === currentRole) {
      clearTimeout(ticker);
      ticker = setTimeout(() => setIsDeleting(true), 2000);
    } 
    // Move to next word when deleted
    else if (isDeleting && text === "") {
      clearTimeout(ticker);
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum]);

  return (
    <section id="home">
      <div className="container fade-in">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">K LOKESH</h1>
        <p className="hero-role">
          {text}
          <span style={{ borderRight: "3px solid var(--red)", animation: "blink 1s step-end infinite", paddingRight: "4px" }}></span>
        </p>
        <p className="hero-bio">
          Designing and deploying intelligent systems using deep learning, NLP,
          and computer vision. I transform data into impactful AI-powered solutions.
        </p>
        <div className="hero-btns">
          <a href="/resume.pdf" download className="btn-primary">
            RESUME
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </a>
          <a href="#contact" className="btn-outline">
            CONTACT
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>
        </div>

        <Terminal />
      </div>
    </section>
  );
}
