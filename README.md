# Prisma TypeScript API

Fastify REST API using Prisma ORM 7 and Neon Postgres.

## Local development

Requirements: Bun 1.4.4 or newer and the Neon environment variables in `.env.local`.

```bash
bun install --frozen-lockfile
bun run db:generate
bun run dev
```

The API listens on `PORT` (defaults to `3000`). `GET /health` is a database-independent health check.

## Checks

```bash
bun run db:generate
bun run typecheck
bun run test
```

The route tests use stub handlers, so they do not need a Neon database. CI supplies a placeholder URL for Prisma client generation and does not connect to a database.

## CI/CD

GitHub Actions runs Prisma client generation, TypeScript checking, the test suite, and a Docker image build on pushes and pull requests targeting `main`. After a successful push to `main`, it triggers Render using the `RENDER_DEPLOY_HOOK_URL` Actions secret.

See [`render.yaml`](./render.yaml) for the Render Blueprint. Set `DATABASE_URL` and `DATABASE_URL_UNPOOLED` in Render to the corresponding Neon connection strings, then add the Render deploy hook URL to GitHub repository Actions secrets.
