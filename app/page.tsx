// app/page.tsx
import PostsMainPage from "@/components/PostsMainPage/PostsMainPage";
import TagsFilter from "@/components/TagsFilter/TagsFilter";
import { Metadata } from "next";
import "./page.css";

export const metadata: Metadata = {
  title: "Главная страница | Next App",
};

type Props = {
  searchParams: {
    tag?: string;
  };
};

const getAllPostsMain = async (tag?: string) => {
  const url = tag
    ? `http://localhost:3000/api/posts?tag=${tag}`
    : `http://localhost:3000/api/posts`;

  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to fetch posts");
  }

  const data = await response.json();
  return data.posts;
};

export default async function Home({ searchParams }: Props) {
  const posts = await getAllPostsMain(searchParams.tag);

  return (
    <>
      <h1>Welcome to NextJS world</h1>
      <TagsFilter />
      <PostsMainPage posts={posts} />
    </>
  );
}
