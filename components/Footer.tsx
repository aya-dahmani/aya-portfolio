"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <span>© 2026 Aya. Turning ideas into digital experiences.</span>
      <button
        onClick={scrollToTop}
        style={{
          background: "none",
          border: "none",
          cursor: "none",
          color: "inherit",
          font: "inherit",
        }}
      >
        Back to top ↑
      </button>
    </footer>
  );
}