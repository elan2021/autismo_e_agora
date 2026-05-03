# Stage 1: Dependencies
FROM node:20-alpine AS deps
# Install openssl for Prisma
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Stage 2: Builder
FROM node:20-alpine AS builder
# Install openssl for Prisma build stage
RUN apk add --no-cache openssl
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
ENV NEXT_TELEMETRY_DISABLED=1

# Provide a dummy DATABASE_URL during build time for Prisma validation
ENV DATABASE_URL="file:./dev.db"

# If using Prisma, generate client
RUN npx prisma generate

RUN npm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
# Install openssl for runtime
RUN apk add --no-cache openssl
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Runtime DATABASE_URL should be provided by Easypanel
# Default to SQLite for safety
ENV DATABASE_URL="file:./data/dev.db"

CMD ["node", "server.js"]
