const skills = [
  { name: "JAVA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JAVASCRIPT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "REACT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "NODEJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MONGODB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "GITHUB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
];

const doubled = [...skills, ...skills];

function SkillCircle({ name, logo }) {
  return (
    <div className="skill-circle">
      <div className="skill-circle-inner">
        <img src={logo} alt={name} className="skill-logo" />
      </div>
      <span className="skill-circle-name">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container fade-in">
        <div className="text-center">
          <span className="section-label">◈ TECH STACK</span>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-desc">AI frameworks, tools, and platforms I use to build intelligent systems.</p>
        </div>
      </div>
      <div className="skills-marquee-wrapper">
        <div className="skills-marquee-track">
          {doubled.map((skill, i) => (
            <SkillCircle key={i} name={skill.name} logo={skill.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}