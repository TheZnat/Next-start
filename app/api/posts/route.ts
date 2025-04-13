import { NextResponse } from "next/server";
import { postsMainPage } from "./post";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const tag = searchParams.get("tag");
  let filteredPosts = postsMainPage;

  if (tag) {
    filteredPosts = postsMainPage.filter((post) => post.tag.includes(tag));
  }

  return NextResponse.json({ posts: filteredPosts });
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ body });
}
