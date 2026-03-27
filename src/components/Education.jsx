const education = [
  {
    badge: "pursuing",
    degree: "B.Tech AI&DS",
    full: "Bachelor of Technology in Artificial Intelligence & Data Science",
    institute: "Muthayammal Engineering College",
    years: "2023 – 2027",
    location: "Rasipuram, Tamil Nadu",
  },
  {
    badge: "completed",
    degree: "HSC",
    full: "Higher Secondary Certificate",
    institute: "Sri sarada balamandir boys matriculation",
    years: "2022 – 2023",
    location: "Salem, Tamil Nadu",
  },
  {
    badge: "completed",
    degree: "SSLC",
    full: "Secondary School Leaving Certificate",
    institute: "Sri sarada balamandir boys matriculation",
    years: "2020 – 2021",
    location: "Salem, Tamil Nadu",
  },
];

function EduCard({ item }) {
  return (
    <div className="edu-card">
      <span className={`edu-badge ${item.badge}`}>
        {item.badge === "pursuing" ? "● Pursuing" : "✓ Completed"}
      </span>
      <div className="edu-degree">{item.degree}</div>
      <div className="edu-full">{item.full}</div>
      <div className="edu-institute">{item.institute}</div>
      <div className="edu-meta">
        <span>🗓 {item.years}</span>
        <span>📍 {item.location}</span>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education">
      <div className="container fade-in">
        <div className="text-center">
          <span className="section-label">◎ ACADEMICS</span>
          <h2 className="section-title">Academic Journey</h2>
        </div>
        <div className="edu-timeline-v2">
          <div className="edu-center-line" />
          {education.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div className="edu-row" key={i}>
                <div className="edu-slot-left">{isLeft && <EduCard item={item} />}</div>
                <div className="edu-dot-wrap"><div className="edu-dot-v2" /></div>
                <div className="edu-slot-right">{!isLeft && <EduCard item={item} />}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
