type EditorialOrbitProps = {
  eyebrow?: string;
  label?: string;
};

export default function EditorialOrbit({
  eyebrow = "Estratégia em movimento",
  label = "INVD",
}: EditorialOrbitProps) {
  return (
    <div className="editorial-orbit" aria-hidden="true">
      <span className="editorial-orbit__eyebrow">{eyebrow}</span>
      <div className="editorial-orbit__stage">
        <span className="editorial-orbit__ring editorial-orbit__ring--one" />
        <span className="editorial-orbit__ring editorial-orbit__ring--two" />
        <span className="editorial-orbit__ring editorial-orbit__ring--three" />
        <span className="editorial-orbit__core">{label}</span>
      </div>
      <div className="editorial-orbit__meta">
        <span>Planejar</span>
        <span>Executar</span>
        <span>Analisar</span>
      </div>
    </div>
  );
}
