const projects = [
  {
    index: "01", name: "Auditerra", category: "FULL-STACK · MOBILE · SECURITY",
    description: "A collaborative service-ticket platform connecting a backend, web dashboard, and Flutter app.",
    overview: "Auditerra brings account management and service-ticket workflows together. Users interact through web and mobile interfaces while a FastAPI backend handles authentication and ticket data.",
    role: "Backend security and mobile authentication integration",
    contributions: ["Implemented and integrated authentication features including JWT, MFA/OTP, and password-recovery flows.", "Worked on account-security controls and protected API access.", "Connected mobile authentication screens to backend endpoints."],
    tags: ["FastAPI", "Flutter", "Next.js"], href: "https://github.com/queeninesuwase/auditerra", theme: "olive", mark: "A/", team: "Collaborative project · Scisync team",
  },
  {
    index: "02", name: "Waliin", category: "FULL-STACK · HEALTHCARE TECHNOLOGY",
    description: "A biomedical equipment maintenance system for fault reports, assessments, and repairs.",
    overview: "Waliin supports biomedical equipment fault reporting, maintenance assessment, prioritization, and operational dashboards for maintenance teams.",
    role: "Fault workflows, API integration, and maintenance reporting",
    contributions: ["Connected engineer-facing fault-request views to backend APIs.", "Contributed to fault assessment and maintenance-reporting workflows.", "Worked on maintenance priorities and reporting views in the dashboard."],
    tags: ["FastAPI", "React", "TypeScript"], href: "https://github.com/queeninesuwase/waliin", theme: "cream", mark: "W.", team: "Collaborative project · Solvya team",
  },
  {
    index: "03", name: "Skin Lesion Classification", category: "AI · COMPUTER VISION",
    description: "An educational image-classification prototype using dermoscopic images and a Streamlit interface.",
    overview: "The project explores transfer learning for classifying skin-lesion images across seven categories using the HAM10000 dataset. It is an educational demonstration, not a diagnostic tool.",
    role: "Model development and interactive application",
    contributions: ["Built a classification workflow using MobileNetV2 and transfer learning.", "Worked with dataset preparation, model evaluation, and prediction outputs.", "Built a Streamlit interface for exploring image-classification results."],
    tags: ["Python", "MobileNetV2", "Streamlit"], href: "https://github.com/queeninesuwase/Skin-Classifications", theme: "terracotta", mark: "AI", team: "AI coursework project",
  },
  {
    index: "04", name: "Mavazi", category: "MOBILE DEVELOPMENT",
    description: "A Flutter mobile application exploring layouts, navigation, and mobile UI development.",
    overview: "Mavazi is a Flutter application project focused on developing mobile interfaces and working with Dart and Flutter's application structure.",
    role: "Flutter application development",
    contributions: ["Worked with Flutter and Dart to build and organize a mobile application.", "Practiced implementing mobile interface components and screen structure.", "Explored application navigation and the mobile development workflow."],
    tags: ["Flutter", "Dart", "Mobile UI"], href: "https://github.com/queeninesuwase/mavazi-project", theme: "sage", mark: "M.", team: "Mobile development project",
  },
  {
    index: "05", name: "Appoint Me", category: "MOBILE · QUALITY ASSURANCE",
    description: "An appointment-booking app built alongside functional, unit, and widget testing.",
    overview: "Appoint Me lets users browse services, select a date and time, confirm bookings, review appointments, and cancel them. The current version stores bookings in memory.",
    role: "Flutter implementation and QA testing",
    contributions: ["Implemented booking screens and appointment-state flows in Flutter.", "Designed tests for missing inputs, duplicate bookings, cancellation, and slot reuse.", "Documented test cases, bug findings, and QA results; used boundary and state-transition techniques."],
    tags: ["Flutter", "Dart", "Flutter Test"], href: "https://github.com/queeninesuwase/Appoint-me-project", theme: "cream", mark: "AM", team: "Personal project",
  },
  {
    index: "06", name: "Data Reliability & API Testing", category: "DATA QUALITY · API TESTING",
    description: "Testing public API responses and identifying data-quality issues in synthetic job data.",
    overview: "The project combines Python/pytest checks against the Open-Meteo API with SQL validation of a synthetic job-posting dataset.",
    role: "Test design, automation, and data validation",
    contributions: ["Created automated positive, negative, and boundary test scenarios for a public weather API.", "Generated synthetic data and wrote SQL checks for duplicates, missing values, invalid dates, and salary ranges.", "Prepared QA findings and data-quality reports."],
    tags: ["pytest", "Python", "SQL"], href: "https://github.com/queeninesuwase/data-reliability-api-testing", theme: "olive", mark: "D/", team: "Personal QA / data project",
  },
];

const skills = [
  { num: "01", title: "Frontend & Mobile", items: "React · Next.js · TypeScript · Flutter · Dart" },
  { num: "02", title: "Backend & APIs", items: "Python · FastAPI · REST APIs · SQL" },
  { num: "03", title: "Quality & Security", items: "Software Testing · API Testing · Authentication · QA" },
  { num: "04", title: "Data & AI", items: "Python · Data Pipelines · Retrieval · Computer Vision" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Queen Ines Uwase home">Queen Ines<span className="brand-dot">.</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Expertise</a>
          <a className="nav-contact" href="#contact">Let’s talk <Arrow diagonal /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-meta"><span className="small-line" /> PORTFOLIO / SOFTWARE DEVELOPMENT <span className="hero-year">2026 — PRESENT</span></div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">HELLO, I’M QUEEN INES UWASE</p>
              <h1>Building digital<br /><em>experiences</em><br />that make sense<span className="full-stop">.</span></h1>
              <p className="hero-description">Software developer drawn to thoughtful interfaces, reliable systems, and technology that solves real problems.</p>
              <div className="hero-actions">
                <a className="button button-solid" href="#work">Explore my work <Arrow diagonal /></a>
                <a className="text-link" href="https://github.com/queeninesuwase" target="_blank" rel="noopener noreferrer">GitHub profile <Arrow diagonal /></a>
              </div>
            </div>
            <figure className="hero-photo">
              <img src="/queen-portrait.jpg" alt="Queen Ines Uwase standing in a warm indoor setting" />
              
            </figure>
          </div>
          <div className="hero-bottom"><span>BASED IN RWANDA · OPEN TO OPPORTUNITIES</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="intro-strip"><div className="strip-inner"><span>CREATIVE THINKING</span><span className="strip-symbol">✳</span><span>ENGINEERING DISCIPLINE</span><span className="strip-symbol">✳</span><span>HUMAN-CENTERED SOLUTIONS</span></div></section>

        <section id="work" className="work-section section-shell">
          <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>Ideas brought<br /><em>to life.</em></h2></div><p className="heading-note">A selection of collaborative and individual projects across software development, QA, and AI.</p></div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card project-${project.theme}`} key={project.index}>
                <div className="card-top"><span>{project.index} / 06</span><a href={`#project-${project.index}`} className="card-arrow" aria-label={`Read about ${project.name}`}><Arrow diagonal /></a></div>
                <div className="project-mark">{project.mark}</div>
                <div className="project-content"><p className="project-category">{project.category}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="project-detail-link" href={`#project-${project.index}`}>What I worked on <Arrow /></a></div>
              </article>
            ))}
          </div>
          <div className="project-deep-dive" aria-label="Project details and contributions">
            <div className="deep-dive-heading"><p className="eyebrow">BEHIND THE WORK</p><h3>What I built <em>& contributed.</em></h3><p>A closer look at the problem each project tackles, the technologies involved, and my part in the work.</p></div>
            <div className="case-study-list">
              {projects.map((project) => (
                <article id={`project-${project.index}`} className="case-study" key={project.index}>
                  <div className="case-study-side"><span className="case-index">{project.index} / 06</span><h4>{project.name}</h4><p className="case-team">{project.team}</p><div className="case-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
                  <div className="case-study-body"><p className="case-label">THE PROJECT</p><p className="case-overview">{project.overview}</p><p className="case-label">MY ROLE</p><p className="case-role">{project.role}</p><p className="case-label">WHAT I WORKED ON</p><ul>{project.contributions.map(item => <li key={item}>{item}</li>)}</ul><a className="case-github" href={project.href} target="_blank" rel="noopener noreferrer">View source on GitHub <Arrow diagonal /></a></div>
                </article>
              ))}
            </div>
          </div>
          <div className="work-footer">More work in progress <span>↗</span><a href="https://github.com/queeninesuwase" target="_blank" rel="noopener noreferrer">VIEW ALL ON GITHUB <Arrow diagonal /></a></div>
        </section>

        <section id="about" className="about-section"><div className="section-shell about-inner"><div className="about-top"><p className="eyebrow light">02 / ABOUT ME</p><span className="about-icon">✳</span></div><div className="about-grid"><h2>Curiosity meets<br /><em>craft.</em></h2><div><p className="about-lead">I enjoy turning complex problems into simple, useful digital experiences.</p><p>My interests span backend engineering, mobile apps, testing, and secure software. I’ve worked across individual projects and collaborative systems, learning how to connect design decisions with real technical requirements.</p><p>Whether I’m building an API, investigating a bug, or refining a user flow, I care about creating software that is understandable, dependable, and purposeful.</p><a href="https://github.com/queeninesuwase" target="_blank" rel="noopener noreferrer" className="about-link">Explore my GitHub <Arrow diagonal /></a></div></div></div></section>

        <section id="skills" className="skills-section section-shell"><div className="section-heading"><div><p className="eyebrow">03 / WHAT I DO</p><h2>Skills with<br /><em>intention.</em></h2></div><p className="heading-note">A versatile toolkit shaped by building, testing, and improving real applications.</p></div><div className="skills-list">{skills.map(skill => <div className="skill-row" key={skill.num}><span>{skill.num}</span><h3>{skill.title}</h3><p>{skill.items}</p><span className="skill-plus">+</span></div>)}</div></section>

        <section className="quote-section"><div className="section-shell quote-inner"><span>✳</span><p>Good software is not just about what it does.<br /><em>It’s about how thoughtfully it works.</em></p></div></section>

        <section id="contact" className="contact-section section-shell"><p className="eyebrow">04 / LET’S CONNECT</p><h2>Have something<br /><em>in mind?</em></h2><p>I’m always interested in meaningful projects, learning opportunities, and conversations about building better technology.</p><a className="button button-contact" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <Arrow diagonal /></a></section>
      </main>
      <footer className="site-footer"><span>© {new Date().getFullYear()} QUEEN INES UWASE</span><a href="#top">BACK TO TOP ↑</a><span>DESIGNED WITH PURPOSE ✳</span></footer>
    </>
  );
}
