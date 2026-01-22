import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { topic } = await req.json();

  // ここで OpenAI などに問い合わせる
  // 今はダミーデータを返す
  const dummyData = {
    bullish: [`${topic} is gaining attention positively`],
    neutral: [`${topic} has mixed discussions`],
    bearish: [`${topic} faces skepticism`],
  };

  return NextResponse.json(dummyData);
}
