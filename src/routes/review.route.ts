import type { FastifyInstance } from "fastify";
import * as ReviewController from "../controller/review.controller";
import { parseBoolean } from "../utils";

export type ReviewRouteHandlers = typeof ReviewController;

type ReviewRouteOptions = {
  handlers?: ReviewRouteHandlers;
};

export async function reviewRoutes(
  app: FastifyInstance,
  options: ReviewRouteOptions = {},
): Promise<void> {
  const handlers = options.handlers ?? ReviewController;

  app.get("/review", async (req, res) => {
    const { include } = req.query as { include?: string };
    return handlers.getAllReviewsHandler(req, res, parseBoolean(include));
  });

  app.get("/review/:id", async (req, res) => {
    const { id } = req.params as { id: string };
    const { include } = req.query as { include?: string };
    return handlers.getReviewByIdHandler(req, res, Number(id), parseBoolean(include));
  });

  app.get("/review/user/:userId", async (req, res) => {
    const { userId } = req.params as { userId: string };
    const { include } = req.query as { include?: string };
    return handlers.getReviewByUserIdHandler(
      req,
      res,
      Number(userId),
      parseBoolean(include),
    );
  });

  app.get("/review/product/:productId", async (req, res) => {
    const { productId } = req.params as { productId: string };
    const { include } = req.query as { include?: string };
    return handlers.getReviewByProductId(
      req,
      res,
      Number(productId),
      parseBoolean(include),
    );
  });
}
