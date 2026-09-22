type TimelineItem = {
  label: string;
  date: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  href?: string;
};

const timelineItems: TimelineItem[] = [
  {
    label: "Education",
    date: "2024 ",
    title: "Baccalaureate - Scientific Stream",
    description:
      "Graduated from high school, achieving a score of 18.57/20.",
    link: "",
  },
  {
    label: "Education",
    date: "2024- present",
    title: "Computer Science Engineering Student",
    description:
      "Currently pursuing a degree in Computer Science at ESI (École Nationale Supérieure d'Informatique) in Algeria.",
    linkText: "ESI",
    href: "https://www.esi.dz/en/home/",
  },
  {
    label: "First achievement",
    date: "December 2025",
    title: "Won the first place in ESMS project with CSE club at ESI",
    description:
      "I worked on the design of the website of the ESMS project, called 'The Golden trials ' isnpired by a hackaton-style event  ",
    link: "",
  },
];

export default function Timeline() {
  return (
    <section id="timeline">
      <span className="eyebrow">03 — timeline</span>
      <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)", marginBottom: 20 }}>
        What I&apos;ve been focused on
      </h2>

      <div className="timeline-list">
        {timelineItems.map((item) => (
          <article className="timeline-item" key={item.title}>
            <div className="timeline-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 6v6l4 2" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>

            <div className="timeline-content">
              <div className="timeline-meta">
                <span className="timeline-label">{item.label}</span>
                <span className="timeline-date">{item.date}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.href ? (
                <a
                  className="timeline-link"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.linkText}
                </a>
              ) : item.link ? (
                <span className="timeline-link">{item.link}</span>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
