const projects = [
  {
    id: 1,
    title: "Transport Management System",
    description: "A full-stack web application for managing transport operations, billing, and records. Built with React and Node.js.",
    tech: ["React.js", "Node.js", "MySQL"],
  },
  {
    id: 2,
    title: "Smart AI Timetable Generator",
    description: "An intelligent scheduling system that automatically generates conflict-free class timetables using optimization algorithms.",
    tech: ["React.js", "Algorithm Design", "Optimization"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container fade-in">
        <div className="text-center">
          <span className="section-label">⬡ PORTFOLIO</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-desc">Notable projects showcasing my expertise in development and problem solving.</p>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-card">
              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.description}</p>
              <div className="project-tech">
                {p.tech.map((t) => <span key={t} className="project-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}