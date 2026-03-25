function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/yoursstarboy-21" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/lokesh-k-12360b2a5" },
    { name: "Email", url: "mailto:loki210905@gmai.com" },
  ];

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Lokesh</h4>
          <p>Full Stack Developer crafting web solutions with React, Node.js, and MySQL.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect With Me</h4>
          <div className="social-links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Lokesh. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
