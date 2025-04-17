"use client";

import { useRouter, useSearchParams } from "next/navigation";
export default function TagsFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTag = searchParams.get("tag");

  const handleClick = (tag?: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (tag) {
      params.set("tag", tag);
    } else {
      params.delete("tag");
    }

    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="tags">
      <button
        className={`tag_bth tag_bth--frontend ${
          currentTag === "frontend" ? "active" : ""
        }`}
        onClick={() => handleClick("frontend")}
      >
        Frontend
      </button>
      <button
        className={`tag_bth tag_bth--backend ${
          currentTag === "backend" ? "active" : ""
        }`}
        onClick={() => handleClick("backend")}
      >
        Backend
      </button>
      <button
        className={`tag_bth ${!currentTag ? "active" : ""}`}
        onClick={() => handleClick()}
      >
        Сброс
      </button>
    </div>
  );
}
