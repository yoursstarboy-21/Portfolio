import { useState } from "react";

export default function About() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section id="about">
      <div className="container fade-in">
        <div className="text-center">
          <span className="section-label">◉ WHO I AM</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-desc">
            A glimpse into my journey as a passionate AI Engineer building intelligent systems that matter.
          </p>
        </div>

        <div className="about-card">
          <div className="about-avatar-wrap">
            <div 
              className="about-avatar"
              onClick={() => setShowModal(true)}
              title="Click to view full picture"
            >
              <img src="/lokesh.jpeg" alt="Lokesh" style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", transition: "all 0.3s" }} />
            </div>
            <span className="available-badge">Available for work</span>
          </div>
          <div>
            <p className="about-bio">
              I'm a passionate <span>AI Engineer</span> currently pursuing B.Tech in Computer
              Science Engineering with a focus on <span>Artificial Intelligence &amp; Data Science (AI&amp;DS)</span>.
              I love designing and deploying end-to-end AI systems — from fine-tuning
              <span> Large Language Models</span> and building NLP pipelines to computer vision and
              real-time inference APIs. I build AI solutions that are not just smart, but truly useful.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <div className="stat-num">3+</div>
                <div className="stat-label">Years in Coding</div>
              </div>
              <div className="about-stat">
                <div className="stat-num">5+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="about-stat">
                <div className="stat-num">100%</div>
                <div className="stat-label">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="cert-modal" onClick={() => setShowModal(false)}>
          <span className="cert-modal-close">&times;</span>
          <img src="/lokesh.jpeg" alt="Lokesh Full" className="cert-modal-img" style={{ borderRadius: "24px", padding: "10px", background: "#111" }} />
        </div>
      )}
    </section>
  );
}