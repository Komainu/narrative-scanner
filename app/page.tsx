"use client";
import { useState } from "react";

export default function Page() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const scan = () => {
    const t = text.toLowerCase();
    if (t.includes("approve") || t.includes("inflow") || t.includes("record")) {
      setResult("🟢 Bullish: strong positive narrative");
    } else if (t.includes("delay") || t.includes("concern") || t.includes("risk")) {
      setResult("🔴 Bearish: skeptical narrative");
    } else {
      setResult("🟡 Neutral: mixed or unclear narrative");
    }
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Narrative Scanner</h1>
      <p>Visualizes how a topic is being discussed.</p>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="e.g. Bitcoin ETF inflow"
        style={{ width: "100%", padding: 8 }}
      />

      <button onClick={scan} style={{ marginTop: 10 }}>
        Scan Narratives
      </button>

      {result && <p style={{ marginTop: 20 }}>{result}</p>}
    </main>
  );
}
