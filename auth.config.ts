import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";

// Edge-safe config: no database imports, no Node.js modules
// Used only by the middleware to verify JWT tokens
export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize() {
        // Actual authorization happens in auth.ts
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnMembers = nextUrl.pathname.startsWith("/members");
      if (isOnMembers) {
        return isLoggedIn;
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
