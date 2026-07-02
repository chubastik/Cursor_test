export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
        background: "linear-gradient(135deg, #0f172a, #1e3a5f)",
        color: "#f8fafc",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Летняя школа — Cursor_test
      </h1>
      <p style={{ maxWidth: "32rem", lineHeight: 1.6, opacity: 0.9 }}>
        Первый сайт собран для мастер-класса. Скоро здесь появится больше
        страниц с помощью ИИ-агентов.
      </p>
    </main>
  );
}
