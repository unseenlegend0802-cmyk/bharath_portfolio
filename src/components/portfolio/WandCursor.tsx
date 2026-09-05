import { useEffect, useRef } from "react";

type Sparkle = {
  el: HTMLSpanElement;
  born: number;
  ttl: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
};

const GLYPHS = ["✦", "✧", "⋆", "✶"];

export function WandCursor() {
  const wandRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enchant fine pointers (mouse/trackpad); keep touch devices native
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const wand = wandRef.current;
    const layer = layerRef.current;
    if (!wand || !layer) return;

    document.documentElement.classList.add("wand-cursor-active");

    let x = -100;
    let y = -100;
    let tx = -100;
    let ty = -100;
    let visible = false;
    let raf = 0;
    let lastTrail = 0;
    const sparkles: Sparkle[] = [];

    const spawn = (sx: number, sy: number, burst: boolean) => {
      if (sparkles.length > 60) return;
      const el = document.createElement("span");
      el.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)] ?? "✦";
      el.className = "wand-sparkle";
      const size = burst ? 10 + Math.random() * 10 : 6 + Math.random() * 7;
      el.style.fontSize = `${size}px`;
      layer.appendChild(el);
      const angle = Math.random() * Math.PI * 2;
      const speed = burst ? 1.6 + Math.random() * 2.6 : 0.2 + Math.random() * 0.5;
      sparkles.push({
        el,
        born: performance.now(),
        ttl: burst ? 700 + Math.random() * 350 : 550 + Math.random() * 300,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (burst ? 0.9 : 0.35),
        x: sx,
        y: sy,
      });
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!visible) {
        x = tx;
        y = ty;
        visible = true;
        wand.style.opacity = "1";
      }
      if (reduced) return;
      const now = performance.now();
      if (now - lastTrail > 55) {
        lastTrail = now;
        // trail sparkles drift from the wand tip (upper-right of the wand graphic)
        spawn(tx + 14, ty - 14, false);
      }
    };

    const onDown = (e: PointerEvent) => {
      wand.classList.add("wand-cursor-cast");
      window.setTimeout(() => wand.classList.remove("wand-cursor-cast"), 260);
      if (reduced) return;
      for (let i = 0; i < 14; i++) {
        spawn(e.clientX + 14, e.clientY - 14, true);
      }
    };

    const onLeave = () => {
      visible = false;
      wand.style.opacity = "0";
    };

    const tick = (now: number) => {
      // ease the wand toward the pointer for a floaty feel
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      wand.style.transform = `translate(${x}px, ${y}px)`;

      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        if (!s) continue;
        const age = now - s.born;
        if (age >= s.ttl) {
          s.el.remove();
          sparkles.splice(i, 1);
          continue;
        }
        const p = age / s.ttl;
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.015; // gentle gravity
        s.el.style.transform = `translate(${s.x}px, ${s.y}px) scale(${1 - p * 0.6}) rotate(${p * 90}deg)`;
        s.el.style.opacity = String(1 - p);
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("wand-cursor-active");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
      sparkles.forEach((s) => s.el.remove());
    };
  }, []);

  return (
    <>
      {/* sparkle layer */}
      <div ref={layerRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[90]" />
      {/* the wand itself */}
      <div ref={wandRef} aria-hidden="true" className="wand-cursor">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          {/* glow tip */}
          <circle cx="26" cy="8" r="5" fill="color-mix(in oklab, var(--primary) 35%, transparent)" />
          <circle cx="26" cy="8" r="2.2" fill="var(--primary)" />
          {/* wand shaft */}
          <path
            d="M4 30 L24 10"
            stroke="var(--primary)"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path
            d="M4 30 L13 21"
            stroke="color-mix(in oklab, var(--foreground) 55%, transparent)"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
}
