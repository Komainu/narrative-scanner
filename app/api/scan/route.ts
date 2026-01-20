import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { topic } = await req.json();

  // 簡易データ（Base向けに最小構成）
  const result = {
    bullish: [`Positive narrative about ${topic}`],
    neutral: [`Neutral narrative about ${topic}`],
    bearish: [`Negative narrative about ${topic}`],
  };

  return NextResponse.json(result);
}
