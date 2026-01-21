"use client";

import { useState } from "react";

export default function Page() {
  const [topic, setTopic] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function run() {
    setLoading(true);
    setData(null);

    const res = await fetch("/api/scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic }),
    });

    const json = await res.json();
    setData(json);
    setLoading(false);
  }

  return (
    <main style={{ padding: 16 }}>
      <h1>Narrative Scanner</h1>
      <p style={{ fontSize: 13, opacity: 0.7 }}>
        Visualizes how a topic is being discussed. No conclusions.
      </p>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="e.g. Bitcoin ETF"
        style={{ width: "100%", padding: 8 }}
      />

      <button
        onClick={run}
        disabled={!topic || loading}
        style={{ marginTop: 8 }}
      >
        {loading ? "Scanning…" : "Scan"}
      </button>

      {data && (
        <div style={{ marginTop: 16 }}>
          <Section title="🟢 Bullish" items={data.bullish} />
          <Section title="🟡 Neutral" items={data.neutral} />
          <Section title="🔴 Bearish" items={data.bearish} />
        </div>
      )}
    </main>
  );
}

function Section({ title, items }: any) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((x: string, i: number) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </div>
  );
}
