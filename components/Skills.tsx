export default function Skills() {
  return (
    <section id="skills">
      <span className="eyebrow">02 — skills</span>
      <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)", marginBottom: 40 }}>
        What I work with
      </h2>
      <div className="skills-cols">
        <div className="skill-card">
          <h3>Web Technologies</h3>
          <div className="tag-list">
            <span className="tag">React</span>
            <span className="tag">Next.js</span>
            <span className="tag">JavaScript</span>
            <span className="tag">TypeScript</span>
            <span className="tag">CSS / Tailwind</span>
            <span className="tag">HTML</span>
          </div>
        </div>
        <div className="skill-card">
          <h3>Programming Languages</h3>
          <div className="tag-list">
            <span className="tag">C</span>
            <span className="tag">Java</span>
             <span className="tag">Python</span>
          </div>
        </div>
        <div className="skill-card">
          <h3>Tools &amp; Technologies</h3>
          <div className="tag-list">
            <span className="tag">Git / GitHub</span>
            <span className="tag">Linux</span>
            <span className="tag">Supabase</span>
          </div>
        </div>
        <div className="skill-card">
          <h3>Creative Tools</h3>
          <div className="tag-list">
            <span className="tag">Figma</span>
             <span className="tag">Canva</span>
          </div>
        </div>
      </div>
    </section>
  );
}
