export function SectionHeading({ light, accent }: { light: string; accent: string }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">
        <span className="text-primary">{light}</span> {accent}
      </h2>
      <p aria-hidden="true" className="rune-divider mt-3 text-xs">
        ✦ ⚯ ✦
      </p>
    </div>
  );
}
