import type { NextRequest } from "next/server";

const HTML_ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&nbsp;": " ",
};

function decodeEntities(value: string) {
  return value
    .replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&apos;|&nbsp;/g, (match) => HTML_ENTITIES[match])
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)));
}

function extractMeta(html: string, property: string) {
  const patterns = [
    new RegExp(
      `<meta[^>]+property=["']${property}["'][^>]+content=["']([^"']*)["']`,
      "i",
    ),
    new RegExp(
      `<meta[^>]+content=["']([^"']*)["'][^>]+property=["']${property}["']`,
      "i",
    ),
    new RegExp(
      `<meta[^>]+name=["']${property}["'][^>]+content=["']([^"']*)["']`,
      "i",
    ),
    new RegExp(
      `<meta[^>]+content=["']([^"']*)["'][^>]+name=["']${property}["']`,
      "i",
    ),
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) {
      return decodeEntities(match[1]);
    }
  }

  return undefined;
}

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return Response.json({ error: "url is required" }, { status: 400 });
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(url);
  } catch {
    return Response.json({ error: "invalid url" }, { status: 400 });
  }

  if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
    return Response.json({ error: "invalid url" }, { status: 400 });
  }

  try {
    const response = await fetch(parsedUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; FavoritesBot/1.0; +https://example.com)",
      },
    });
    const html = await response.text();

    const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);

    const title =
      extractMeta(html, "og:title") ??
      (titleMatch ? decodeEntities(titleMatch[1].trim()) : url);
    const description =
      extractMeta(html, "og:description") ?? extractMeta(html, "description");
    const thumbnail = extractMeta(html, "og:image");
    const siteName = extractMeta(html, "og:site_name") ?? parsedUrl.hostname;

    return Response.json({
      url,
      title,
      description: description ?? null,
      thumbnail: thumbnail ?? null,
      siteName,
    });
  } catch {
    return Response.json(
      { error: "failed to fetch open graph info" },
      { status: 502 },
    );
  }
}
