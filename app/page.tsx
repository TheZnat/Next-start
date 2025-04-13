import PostsMainPage from "@/components/PostsMainPage/PostsMainPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная страница | Next App",
};

const getAllPostsMain = async () => {
  const response = await fetch("http://localhost:3000/api/posts");
  if (!response.ok) {
    throw new Error("Unable to fetch posts");
  }
  const data = await response.json();
  return data.posts;
};

export default async function Home() {
  const posts = await getAllPostsMain(); // Получаем данные с сервера

  return (
    <>
      <h1>Welcome to NextJS world</h1>
      <PostsMainPage posts={posts} /> {/* Передаем данные как пропсы */}
    </>
  );
}
