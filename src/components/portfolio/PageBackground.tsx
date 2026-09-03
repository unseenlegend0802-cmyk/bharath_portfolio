import castle from "@/assets/hogwarts-castle.jpg";

export function PageBackground() {
  return (
    <>
      {/* Hogwarts castle — fixed page background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-30"
        style={{
          backgroundImage: `url(${castle})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: 0.22,
        }}
      />
      {/* Dark wash so content stays readable over the artwork */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-20 bg-gradient-to-b from-background/45 via-background/70 to-background"
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
