FROM oven/bun:1.4.4

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .

# Prisma generation needs a syntactically valid URL, but does not connect to it.
RUN DATABASE_URL_UNPOOLED=postgresql://ci:ci@127.0.0.1:5432/ci bun run db:generate

ENV NODE_ENV=production
EXPOSE 10000

CMD ["bun", "run", "start"]
