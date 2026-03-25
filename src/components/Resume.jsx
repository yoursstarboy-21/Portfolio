function Resume() {
  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Lokesh-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume">
      <div className="container">
        <h2 className="fade-in">Resume</h2>
        <p className="section-subtitle">
          Download my complete resume and professional background
        </p>

        <div className="resume-download-section fade-in">
          <div className="download-card">
            <div className="download-icon">📄</div>
            <h3>My Resume</h3>
            <p>Full background including experience, education, and certifications</p>
            <button className="download-btn" onClick={downloadResume}>
              📥 Download Resume (PDF)
            </button>
            <p className="download-note">Lokesh-Resume.pdf • 74 KB</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
