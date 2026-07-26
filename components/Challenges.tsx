export default function Challenges() {
  return (
    <section id="challenges">
      <span className="eyebrow">05 — challenges</span>
      <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)", marginBottom: 20 }}>
        Built under pressure
      </h2>
      <div className="project-list">
        <article className="project-row" title="Travel Agency — DevSprint">
          <span className="project-tag">DEVSPRINT · 2 DAYS</span>
          <div>
            <h3>Travel Agency</h3>
            <p>
                Team work built during the DevSprint hackathon in 48 hours. Worked on the frontend of the website. Hosted by CSE club at ESI.
             
            </p>
            <div className="project-links">
              <a
                href="#"
                className="project-link-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14 3h7v7" />
                  <path d="M10 14 21 3" />
                  <path d="M21 14v7h-7" />
                  <path d="M3 10 14 21" />
                </svg>
                View Solution
              </a>
            </div>
          </div>
          <span className="arrow">↗</span>
        </article>

        <article className="project-row" title="Rebuild Gaza — Hackin">
          <span className="project-tag">HACKIN · 3 DAYS</span>
          <div>
            <h3>Rebuild Gaza</h3>
            <p>
              Team work built at the Hackin hackathon in 3 days, hosted by
              the CSE Club at ESI. Worked on the frontend and the design of the platform.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/aya-dahmani/Rebuild_GAZA"
                className="project-link-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14 3h7v7" />
                  <path d="M10 14 21 3" />
                  <path d="M21 14v7h-7" />
                  <path d="M3 10 14 21" />
                </svg>
                View Solution
              </a>
            </div>
          </div>
          <span className="arrow">↗</span>
        </article>
      </div>
    </section>
  );
}