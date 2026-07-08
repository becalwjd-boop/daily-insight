import { NextResponse } from "next/server";
import { fetchThumbnailFromItem } from "@/lib/news";

export const revalidate = 86400;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const link = searchParams.get("link");
  const originallink = searchParams.get("originallink");
  const url = searchParams.get("url");

  if (!link && !originallink && !url) {
    return NextResponse.json({ imageUrl: null });
  }

  const imageUrl = await fetchThumbnailFromItem({
    link,
    originallink,
    url,
  });

  return NextResponse.json({ imageUrl });
}