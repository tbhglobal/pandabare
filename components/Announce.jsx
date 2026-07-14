export default function Announce() {
  const items = ["Free shipping on orders $80+", "30-day comfort guarantee", "Bamboo comfort. Lower impact."];
  return (
    <div style={{ background: "var(--forest)", color: "rgba(246,243,238,.92)", fontSize: 12 }}>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", gap: 24, padding: "9px 36px" }}>
        {items.map((t) => <span key={t}>{t}</span>)}
      </div>
    </div>
  );
}
