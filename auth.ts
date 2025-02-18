import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/db/prisma";
import { compareSync } from "bcrypt-ts-edge";
import CredentialsProvider from "next-auth/providers/credentials";

export const config = {
  pages: {
    signIn: "/signIn",
    error: "/signIn",
  },
  session: {
    strategy: "jwt" as const,
    maxAge: 30 * 24 * 60 * 60,
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};
        if (email == null || password == null) return null;

        const user = await prisma.user.findFirst({
          where: {
            email: email as string,
          },
        });

        // Check if user exists and if the password matches
        if (user && user.password) {
          const isMatch = compareSync(password as string, user.password);

          if (isMatch) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
            };
          }
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, user, trigger, token }: any) {
      session.user.id = token.sub;

      if (trigger === "update") {
        session.user.name = user.name;
      }

      return session;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);