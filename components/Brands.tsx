const brands = ["DoorHan", "Came", "Nice", "BFT", "FAAC", "Hormann"];

export default function Brands() {
  return (
    <section style={{ backgroundColor: "#060F1E", borderTop: "1px solid rgba(201,168,76,0.15)", padding: "48px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div style={{ textAlign: "center", color: "#4A6A8A", fontSize: 12, fontWeight: 600, letterSpacing: 3, marginBottom: 28 }}>
          TRUSTED BRANDS WE WORK WITH
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {brands.map((b) => (
            <div key={b} style={{
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: 8,
              padding: "12px 28px",
              color: "#C9A84C",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: 1,
              backgroundColor: "rgba(201,168,76,0.05)"
            }}>{b}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
