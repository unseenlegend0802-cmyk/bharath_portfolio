import castle from "@/assets/hogwarts-castle.jpg";

export function PageBackground() {
  return (
    <>
      {/* Hogwarts castle — fixed page background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-30">
        <img
          src={castle}
          alt=""
          className="h-full w-full object-cover object-center"
        />
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
