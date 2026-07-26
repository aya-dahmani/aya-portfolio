export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div>
          <span className="eyebrow">01 — about</span>
          <h2>A little about me</h2>
          <p>
            I&apos;m a third-year Computer Science student at ESI (École
            Nationale Supérieure d&apos;Informatique) in Algeria.
          </p>
          <p>I code random projects.</p>
        </div>
        <ul className="fact-list">
          <li>
            <span className="k">SCHOOL</span>
            <span className="v">
              ESI — École Nationale Supérieure d&apos;Informatique
            </span>
          </li>
          <li>
            <span className="k">YEAR</span>
            <span className="v">3rd Year</span>
          </li>
          <li>
            <span className="k">LANGUAGES</span>
            <span className="v">French &amp; English</span>
          </li>
          <li>
            <span className="k">FOCUS</span>
            <span className="v">Software, systems &amp; the web</span>
          </li>
         
        </ul>
      </div>
    </section>
  );
}
