"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import styles from "./GitHubButton.module.css";
import Image from "next/image";

const GitHubButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  return (
    <button
      onClick={() => signIn("github", { callbackUrl })}
      className={styles["button--github"]}
    >
      <Image src="/github-mark.svg" width={20} height={20} alt="GitHub logo" />
      Sign in with GitHub
    </button>
  );
};

export default GitHubButton;
