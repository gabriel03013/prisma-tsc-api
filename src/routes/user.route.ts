import type { FastifyInstance } from "fastify";
import * as UserController from "../controller/user.controller";

export type UserRouteHandlers = typeof UserController;

type UserRouteOptions = {
  handlers?: UserRouteHandlers;
};

export async function userRoutes(
  app: FastifyInstance,
  options: UserRouteOptions = {},
): Promise<void> {
  const handlers = options.handlers ?? UserController;

  app.get("/user", async (req, res) => {
    const { include } = req.query as { include?: string };
    return handlers.getAllUsersHandler(req, res, include === "true");
  });

  app.get("/user/:id", async (req, res) => {
    const { id } = req.params as { id: string };
    const { include } = req.query as { include?: string };
    return handlers.getUserByIdHandler(req, res, Number(id), include === "true");
  });

  app.get("/user/name", async (_req, res) =>
    res.status(404).send("This endpoint does not exist; try /user/name/{user name}"),
  );

  app.get("/user/name/:name", async (req, res) => {
    const { name } = req.params as { name: string };
    const { include } = req.query as { include?: string };
    return handlers.getUserByNameHandler(req, res, name, include === "true");
  });

  app.get("/user/email", async (_req, res) =>
    res.status(404).send("This endpoint does not exist; try /user/email/{user email}"),
  );

  app.get("/user/email/:email", async (req, res) => {
    const { email } = req.params as { email: string };
    const { include } = req.query as { include?: string };
    return handlers.getUserByEmailHandler(req, res, email, include === "true");
  });
}
