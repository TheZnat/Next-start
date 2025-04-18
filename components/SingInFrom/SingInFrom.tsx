"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";
import styles from "./SingInFrom.module.css";

const SingInFrom = () => {
    const router = useRouter();
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const res = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
        })

        if (res && !res.error) {
            router.push("/profile");
        } else {
            console.log(res);
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles["form"]}>
            <h2>Sign In form email</h2>
            <input type="email" name="email" placeholder="email" required className={styles["input"]}/>
            <input type="password" name="password" placeholder="password" required  className={styles["input"]}/>
            <button type="submit"  className={styles["bth"]}>Sign In</button>
        </form>
    );
};

export {SingInFrom};
