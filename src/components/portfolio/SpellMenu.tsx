import { useCallback, useEffect, useRef, useState } from "react";
import { spells, type SpellId } from "@/data/spells";

const EFFECT_CLASSES = [
  "cast-lumos",
  "cast-nox",
  "cast-expelliarmus",
  "cast-wingardium-leviosa",
  "cast-alohomora",
] as const;

function clearEffects() {
  document.documentElement.classList.remove(...EFFECT_CLASSES);
}

/**
 * Dwell the wand tip anywhere on the page and a spell menu unfurls.
 * Picking a spell casts a visual effect over the whole page.
 */
export function SpellMenu() {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [cast, setCast] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);
  const effectTimerRef = useRef<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const castSpell = useCallback((id: SpellId, name: string) => {
    clearEffects();
    if (effectTimerRef.current) window.clearTimeout(effectTimerRef.current);
    if (id !== "finite") {
      document.documentElement.classList.add(`cast-${id}`);
      effectTimerRef.current = window.setTimeout(clearEffects, id === "nox" ? 2600 : 2200);
    }
    setCast(name);
    setOpen(false);
    window.setTimeout(() => setCast((c) => (c === name ? null : c)), 1600);
  }, []);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: PointerEvent) => {
      if (menuRef.current?.contains(e.target as Node)) return;
      if (timerRef.current) window.clearTimeout(timerRef.current);
      if (open) return;
      const x = e.clientX;
      const y = e.clientY;
      timerRef.current = window.setTimeout(() => {
        setPos({ x, y });
        setOpen(true);
      }, 900);
    };

    const onDown = (e: PointerEvent) => {
      if (menuRef.current?.contains(e.target as Node)) return;
      if (timerRef.current) window.clearTimeout(timerRef.current);
      setOpen(false);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", () => setOpen(false), { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown, true);
      window.removeEventListener("keydown", onKey);
      if (timerRef.current) window.clearTimeout(timerRef.current);
      if (effectTimerRef.current) window.clearTimeout(effectTimerRef.current);
      clearEffects();
    };
  }, [open]);

  useEffect(() => () => clearEffects(), []);

  const left = Math.min(Math.max(pos.x + 18, 12), (typeof window !== "undefined" ? window.innerWidth : 1200) - 250);
  const top = Math.min(Math.max(pos.y - 20, 12), (typeof window !== "undefined" ? window.innerHeight : 800) - 300);

  return (
    <>
      {open && (
        <div
          ref={menuRef}
          role="menu"
          aria-label="Spell menu"
          className="spell-menu fixed z-[95] w-56 card-surface p-2 backdrop-blur-sm"
          style={{ left, top }}
        >
          <p className="px-2 pt-1 pb-2 font-display text-[10px] tracking-[0.22em] text-primary uppercase">
            Cast a spell
          </p>
          <ul className="space-y-0.5">
            {spells.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => castSpell(s.id, s.name)}
                  className="w-full rounded px-2 py-1.5 text-left text-sm text-foreground/90 transition-colors hover:bg-primary/15 hover:text-primary"
                >
                  {s.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {cast && (
        <div
          aria-live="polite"
          className="pointer-events-none fixed top-24 left-1/2 z-[96] -translate-x-1/2 font-display text-2xl tracking-[0.2em] text-primary uppercase spell-incantation"
        >
          {cast}!
        </div>
      )}
    </>
  );
}
