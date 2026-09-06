import castle from "@/assets/hogwarts-castle.jpg";

export function PageBackground() {
  return (
    <>
      {/* Hogwarts castle — fixed page background, dimmed so text stays readable.
          The image is slightly oversized and gently sways so it never clips. */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-30">
        <img
          src={castle}
          alt=""
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
