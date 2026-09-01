const motes = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  size: 2 + ((i * 7) % 4),
  delay: `${(i * 1.3) % 9}s`,
  duration: `${11 + ((i * 3) % 9)}s`,
  drift: `${((i % 5) - 2) * 30}px`,
}));

export function Particles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {motes.map((m, i) => (
        <span
          key={i}
          className="mote absolute rounded-full bg-primary"
          style={{
            left: m.left,
            width: m.size,
            height: m.size,
            animationDelay: m.delay,
            animationDuration: m.duration,
            ["--drift" as string]: m.drift,
          }}
        />
      ))}
    </div>
  );
}
