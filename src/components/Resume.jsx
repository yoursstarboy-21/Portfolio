function Resume() {
  const resumes = [
    {
      id: 'current',
      title: 'Latest Resume',
      description: 'Full background including experience, education, and certifications',
      url: '/resume.pdf',
      filename: 'Lokesh-Resume.pdf',
      size: '74 KB',
    },
    // Add more resume entries here. Drop the PDF(s) into the `public/` folder
    // and reference them by url (e.g. '/resume-2026.pdf').
    // {
    //   id: 'v2',
    //   title: 'Resume (2026)',
    //   description: 'Updated resume with recent projects',
    //   url: '/resume-2026.pdf',
    //   filename: 'Lokesh-Resume-2026.pdf',
    //   size: '80 KB',
    // },
  ];

  const downloadResume = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume">
      <div className="container">
        <h2 className="fade-in">Resume</h2>
        <p className="section-subtitle">Download my complete resume and professional background</p>

        <div className="resume-download-section fade-in">
          {resumes.map((r) => (
            <div className="download-card" key={r.id}>
              <div className="download-icon">📄</div>
              <h3>{r.title}</h3>
              <p>{r.description}</p>
              <button className="download-btn" onClick={() => downloadResume(r.url, r.filename)}>
                📥 Download {r.title} (PDF)
              </button>
              <p className="download-note">{r.filename} • {r.size}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
