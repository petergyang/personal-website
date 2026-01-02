import { NextResponse } from "next/server";

const SUBSTACK_API_URL =
  "https://publisher-api.substack.com/v1/posts?maxResults=3&sortBy=newest&type=newsletter";
const SUBSTACK_BASE_URL = "https://creatoreconomy.so/p";

interface SubstackPost {
  title: string;
  urlSlug: string;
}

interface SubstackResponse {
  posts: SubstackPost[];
}

export async function GET() {
  const apiKey = process.env.SUBSTACK_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(SUBSTACK_API_URL, {
      headers: {
        accept: "application/json",
        authorization: apiKey,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch posts" },
        { status: response.status }
      );
    }

    const data: SubstackResponse = await response.json();

    const posts = data.posts.map((post) => ({
      title: post.title,
      url: `${SUBSTACK_BASE_URL}/${post.urlSlug}`,
    }));

    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
