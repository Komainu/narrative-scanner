"use client";

import { useState } from "react";
import Head from "next/head"; // ← ここを追加

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
    <>
      <Head>
        <title>Narrative Scanner</title>
        <meta property="og:title" content="Narrative Scanner" />
        <meta property="og:description" content="Visualize topic narratives" />
        <meta property="og:image" content="/og.png" />
      </Head>

      <main style={{ padding: 16, fontFamily: "system-ui" }}>
        <h1>Narrative Scanner</h1>
        <p style={{ fontSize: 13, opacity: 0.7 }}>
          Visualizes how a topic is being discussed. No conclusions, no predictions.
        </p>

        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter a topic (e.g. Bitcoin ETF)"
          style={{ width: "100%", padding: 8, marginTop: 8 }}
        />

        <button
          onClick={run}
          disabled={!topic || loading}
          style={{ marginTop: 8 }}
        >
          {loading ? "Scanning…" : "Scan Narratives"}
        </button>

        {data && (
          <div style={{ marginTop: 16 }}>
            <Section title="🟢 Bullish Narratives" items={data.bullish} />
            <Section title="🟡 Neutral Narratives" items={data.neutral} />
            <Section title="🔴 Bearish Narratives" items={data.bearish} />
          </div>
        )}
      </main>
    </>
  );
}

function Section({ title, items }: any) {
  return (
    <div style={{ marginBottom: 12 }}>
      <h3>{title}</h3>
      <ul>
        {items.map((x: string, i: number) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </div>
  );
}
