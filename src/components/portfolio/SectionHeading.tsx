export function SectionHeading({ light, accent }: { light: string; accent: string }) {
  return (
    <h2 className="text-center text-3xl font-bold sm:text-4xl">
      <span className="text-primary">{light}</span> {accent}
    </h2>
  );
}
