export function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`section-label${light ? " is-light" : ""}`}>{children}</p>;
}
