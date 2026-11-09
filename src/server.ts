import fastify from "fastify";
import * as ReviewController from "./controller/review.controller";
import * as UserController from "./controller/user.controller";
import { reviewRoutes, type ReviewRouteHandlers } from "./routes/review.route";
import { userRoutes, type UserRouteHandlers } from "./routes/user.route";

type AppOptions = {
  logger?: boolean;
  reviewHandlers?: ReviewRouteHandlers;
  userHandlers?: UserRouteHandlers;
};

export function buildApp(options: AppOptions = {}) {
  const app = fastify({ logger: options.logger ?? process.env.NODE_ENV !== "test" });

  app.get("/", async () => "hello bun!");
  app.get("/health", async () => ({ status: "ok" }));

  app.register(userRoutes, {
    handlers: options.userHandlers ?? UserController,
  });
  app.register(reviewRoutes, {
    handlers: options.reviewHandlers ?? ReviewController,
  });

  return app;
}

if (import.meta.main) {
  const app = buildApp();
  const port = Number(process.env.PORT ?? 3000);

  app.listen({ port, host: "0.0.0.0" }).catch((error: unknown) => {
    app.log.error(error);
    process.exitCode = 1;
  });
}
