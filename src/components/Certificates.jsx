import { useState } from "react";

const certs = [
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
  {
    title: "Computer Vision",
    issuer: "OpenCV",
    year: "2023",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg",
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
          <h2 className="section-title">Licenses & Certs</h2>
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
