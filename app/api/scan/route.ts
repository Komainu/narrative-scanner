import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { topic } = await req.json();

  return NextResponse.json({
    bullish: [`Positive outlook on ${topic}`],
    neutral: [`Mixed opinions around ${topic}`],
    bearish: [`Concerns and risks about ${topic}`],
  });
}
