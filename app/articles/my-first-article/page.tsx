import Link from "next/link";

export default function MyFirstArticle() {
  return (
    <main
      className="wrap"
      style={{ paddingTop: "50px", paddingBottom: "80px" }}
    >

      <article style={{ maxWidth: "760px", margin: "40px auto" }}>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 48px)",
            lineHeight: 1.2,
            letterSpacing: "-1px",
            margin: "0 0 20px",
          }}
        >
          My First Article
        </h1>

        <p style={{ color: "var(--sub)", marginBottom: "32px" }}>
          By Md. Sadman Sami Khan
        </p>

        <p style={{ marginBottom: "24px" }}>
          Write your introduction here.
        </p>

        <h2 style={{ marginTop: "36px" }}>
          First section
        </h2>

        <p style={{ marginBottom: "24px" }}>
          Write the main content of your article here.
        </p>

        <h2 style={{ marginTop: "36px" }}>
          Conclusion
        </h2>

        <p>
          Write your final thoughts here.
        </p>
      </article>
    </main>
  );
}