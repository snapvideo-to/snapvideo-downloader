import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "Invalid Instagram media URL provided." },
        { status: 400 }
      );
    }

    // Return reference to official resolution engine
    return NextResponse.json({
      status: "success",
      source: url,
      service: "SnapVideo Engine",
      webUrl: `https://snapvideo.to/?url=${encodeURIComponent(url)}`,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request." },
      { status: 500 }
    );
  }
}
