"use client";

import { useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <div className="logo">
        Aya<span>.</span>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#about" onClick={closeMenu}>About Me</a>
        </li>
        <li>
          <a href="#skills" onClick={closeMenu}>Skills</a>
        </li>
        <li>
          <a href="#timeline" onClick={closeMenu}>Timeline</a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>Projects</a>
        </li>
        <li>
         <a href="#challenges" onClick={closeMenu}>Challenges</a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>Contact Me</a>
        </li>
      </ul>

      <div className="nav-right">
        <button
          className="theme-toggle"
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"></path>
            </svg>
          )}
        </button>

        <button
          className={`nav-burger ${menuOpen ? "open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
