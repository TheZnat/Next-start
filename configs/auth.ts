import { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { users } from "@/data/users";

export const AuthConfig: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    Credentials({
        credentials: {
            email: { label: "email", type: "email", placeholder: "email" },
            password: { label: "password", type: "password" }
        },
        async authorize(credentials) {
           if (!credentials?.email || !credentials?.password) return null;
           const currentUser = users.find( user => user.email === credentials.email);
           if (currentUser && currentUser.password === credentials.password) {
            const { password, ...userWithoutPass } = currentUser;
               return userWithoutPass as any;
           }
           return null;

        }
    })
  ],
  pages: {
    signIn: "/signin",
  },
  debug: true,
};
