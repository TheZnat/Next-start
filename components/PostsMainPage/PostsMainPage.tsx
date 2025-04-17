// components/PostsMainPage/PostsMainPage.tsx
import styles from "./PostsMainPage.module.css";
import Image from "next/image";

const PostsMainPage = ({ posts }: { posts: any[] }) => {
  return (
    <main className={styles["main-container"]}>
      {posts.length > 0 ? (
        posts.map((post: any, index: number) => (
          <div key={post.id} className={styles["card"]}>
            <div className={styles["card__title-container"]}>
              <h2 className={styles["card__title"]}>{post.title}</h2>
              <p className={styles["card__tag"]}>{post.tag.join(", ")}</p>
            </div>
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={200}
              className={styles["card__img"]}
              priority={index === 0} 
              style={{ height: "auto" }} 
            />
            <p className={styles["card__text"]}>{post.body}</p>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </main>
  );
};

export default PostsMainPage;
