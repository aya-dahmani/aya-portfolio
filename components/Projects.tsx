export default function Projects() {
  return (
    <section id="projects">
      <span className="eyebrow">04 — projects</span>
      <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)", marginBottom: 20 }}>
        Things I&apos;ve built
      </h2>
      <div className="project-list">
        <article className="project-row" title="ESIcodeHub">
          <span className="project-tag">TEAM PROJECT</span>
          <div>
            <h3>ESIcodeHub</h3>
            <p>
              A collaborative code-sharing platform built for ESI students & teachers .
              Contributed to the frontend of the platform.
            </p>
            <div className="project-links">
              <a href="https://github.com/aya-dahmani/ESIcodehub.git" className="project-link-btn" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 6h18v12H3z" />
                  <path d="m7 10 2 2-2 2" />
                  <path d="M12 14h5" />
                </svg>
                Source
              </a>
              <a href="https://esicodehub.vercel.app/" className="project-link-btn" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 3h7v7" />
                  <path d="M10 14 21 3" />
                  <path d="M21 14v7h-7" />
                  <path d="M3 10 14 21" />
                </svg>
                Live
              </a>
            </div>
          </div>
          <span className="arrow">↗</span>
        </article>
        <article className="project-row" title="Petal & Stem">
          <span className="project-tag">PERSONAL PROJECT</span>
          <div>
            <h3>Petal &amp; Stem</h3>
            <p>
              A flower shop website built with Next.js, with a
              botanical-editorial aesthetic — full storefront, cart .
            </p>
            <div className="project-links">
              <a href="https://github.com/aya-dahmani/flower-shop.git" className="project-link-btn" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 6h18v12H3z" />
                  <path d="m7 10 2 2-2 2" />
                  <path d="M12 14h5" />
                </svg>
                Source
              </a>
              <a href="https://flower-shop-gold-two.vercel.app/" className="project-link-btn" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 3h7v7" />
                  <path d="M10 14 21 3" />
                  <path d="M21 14v7h-7" />
                  <path d="M3 10 14 21" />
                </svg>
                Live
              </a>
            </div>
          </div>
          <span className="arrow">↗</span>
        </article>
      </div>
    </section>
  );
}
