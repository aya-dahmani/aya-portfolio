"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;

    document.body.classList.add("custom-cursor-active");

    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    dot.style.left = centerX + "px";
    dot.style.top = centerY + "px";
    glow.style.left = centerX + "px";
    glow.style.top = centerY + "px";

    // Dot and glow now move together, in perfect sync, on every mousemove.
    // No requestAnimationFrame lag between them.
    const onMove = (e: MouseEvent) => {
      const x = e.clientX + "px";
      const y = e.clientY + "px";
      dot.style.left = x;
      dot.style.top = y;
      glow.style.left = x;
      glow.style.top = y;
    };
    window.addEventListener("mousemove", onMove);

    const grow = () => dot.classList.add("grow");
    const shrink = () => dot.classList.remove("grow");

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .core, .timeline-item")) grow();
    };
    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .core, .timeline-item")) shrink();
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef}></div>
      <div id="cursor-glow" ref={glowRef}></div>
    </>
  );
}