import castle from "@/assets/hogwarts-castle.jpg";

export function PageBackground() {
  return (
    <>
      {/* Hogwarts castle — fixed page background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-30">
        <img
          src={castle}
          alt=""
          className="h-full w-full object-cover object-center opacity-70"
        />
        {/* Gradient washes keep text readable while the castle stays visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

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
