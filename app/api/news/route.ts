import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const keyword = searchParams.get("query") || "경제";

  const clientId = process.env.NAVER_CLIENT_ID;
  const clientSecret = process.env.NAVER_CLIENT_SECRET;

  const query = encodeURIComponent(keyword);

  const url = `https://openapi.naver.com/v1/search/news.json?query=${query}&display=10&sort=date`;

  const response = await fetch(url, {
    headers: {
      "X-Naver-Client-Id": clientId!,
      "X-Naver-Client-Secret": clientSecret!,
    },
  });

  const data = await response.json();

  return NextResponse.json(data);
}