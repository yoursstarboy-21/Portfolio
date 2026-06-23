import { useState } from "react";

const certs = [
  {
    title: "IoT",
    issuer: "NPTEL",
    year: "Jan-Apr 2026",
    logo: "/Iot.jpg",
  },
  {
    title: "Core Java",
    issuer: "BBC",
    year: "2025",
    logo: "/bbc.jpeg",
  },
  {
    title: "Tamil Typing (Senior)",
    issuer: "Typing Academy",
    year: "2025",
    logo: "/TamilTySr.jpeg",
  },
  {
    title: "Tamil Typing (Junior)",
    issuer: "Typing Academy",
    year: "2025",
    logo: "/TamilTyJr.jpeg",
  },
  {
    title: "English Typing (Junior)",
    issuer: "Typing Academy",
    year: "2019",
    logo: "/EngTyJr.jpeg",
  },
  {
    title: "English Typing (Senior)",
    issuer: "Typing Academy",
    year: "2022",
    logo: "/EngTySr.jpeg",
  },
  {
    title: "Distributed Systems",
    issuer: "NPTEL",
    year: "JUL-SEP 2025",
    logo: "/nptel-ds.png",
  },
  {
    title: "Electronic Waste Management",
    issuer: "NPTEL",
    year: "JAN-FEB 2025",
    logo: "/e-waste.png",
  },
];

const doubled = [...certs, ...certs];

export default function Certificates() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="certificates">
      <div className="container fade-in">
        <div className="text-center">
          <span className="section-label">★ CERTIFICATIONS</span>
          <h2 className="section-title">ACHIEVEMENTS</h2>
        </div>
      </div>
      <div className="cert-marquee-wrapper">
        <div className="cert-marquee-track">
          {doubled.map((cert, i) => (
            <div key={i} className="cert-card" onClick={() => setSelectedImg(cert.logo)}>
              <div className="cert-card-img-wrap">
                <div className="cert-card-logo-bg">
                  <img src={cert.logo} alt={cert.issuer} className="cert-card-logo" />
                </div>
              </div>
              <div className="cert-card-body">
                <div className="cert-card-title">{cert.title}</div>
                <div className="cert-card-issuer">{cert.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImg && (
        <div className="cert-modal" onClick={() => setSelectedImg(null)}>
          <span className="cert-modal-close">&times;</span>
          <img src={selectedImg} alt="Certificate Full View" className="cert-modal-img" />
        </div>
      )}
    </section>
  );
}
