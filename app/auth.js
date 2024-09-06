import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

import { getUserByEmail } from "@/data/data";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (credentials === null) return null;

        try {
          const user = getUserByEmail(credentials?.email);
          if (user) {
            const isMatch = user?.password === credentials?.password;
            if (isMatch) {
              return user;
            } else {
              throw new Error("Check your password");
            }
          } else {
            throw new Error("User Not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
});
