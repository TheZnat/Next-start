import { AuthConfig } from "@/configs/auth";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Profile | Next App",
};

export default async function About() {
  const session = await getServerSession(AuthConfig);

  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && (
        <Image
          src={session.user.image}
          alt={session.user.name || ""}
          width={120}
          height={120}
          style={{ borderRadius: "50%" }}
        />
      )}
    </div>
  );
}
