export const runtime = "edge";

export async function POST(req: Request) {
  const { topic } = await req.json();

  const prompt = `
You are an information-structuring assistant.

Task:
Organize how the following topic is commonly discussed.

Rules:
- Do NOT provide conclusions or predictions.
- Do NOT give investment advice.
- Describe narratives as "how it is talked about".
- Avoid certainty and definitive language.

Output format:
{
  "bullish": [string],
  "neutral": [string],
  "bearish": [string]
}

Topic:
${topic}
`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
    }),
  });

  const json = await res.json();
  const text = json.choices[0].message.content;

  return Response.json(JSON.parse(text));
}
