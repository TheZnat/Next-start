import GitHubButton from "@/components/GitHubButton/GitHubButton";
import styles from "./styles.module.css";
import { SingInFrom } from "@/components/SingInFrom/SingInFrom";
export default function Signin() {
  return (
    <main>
      <h1>SignIn</h1>
      <section className={styles["wrapper"]}>
        <GitHubButton />
        <SingInFrom />
      </section>
    </main>
  );
}
