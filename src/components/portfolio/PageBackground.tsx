import castleVideo from "@/assets/hogwarts-castle.mp4.asset.json";

export function PageBackground() {
  return (
    <>
      {/* Hogwarts castle — fixed page background video, dimmed so text stays readable. */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-30 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src={castleVideo.url}
          className="castle-wave h-full w-full object-cover object-center"
        />
      </div>

      {/* Subtle dark readability wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, transparent 0%, rgba(10, 14, 30, 0.55) 60%, rgba(8, 12, 28, 0.78) 100%)",
        }}
      />

      {/* Enchanted starfield overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage: "var(--starfield)",
          backgroundAttachment: "fixed",
        }}
      />
    </>
  );
}
