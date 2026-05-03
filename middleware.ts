import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

// Middleware uses the edge-safe config only (no Prisma, no Node.js modules)
export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/members/:path*"],
};
