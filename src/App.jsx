import "./index.css";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        color: "var(--on-surface)",
        backgroundColor: "var(--surface)",
      }}
    >
      <h1
        style={{
          fontSize: "var(--font-size-h3)",
          fontWeight: "var(--font-semibold)",
        }}
      >
        Tropikux UI
      </h1>
      <p
        style={{
          fontSize: "var(--font-size-p1)",
          color: "var(--on-surface-variant)",
        }}
      >
        Proyecto configurado correctamente. Empieza a construir aquí.
      </p>
    </div>
  );
}

export default App;
