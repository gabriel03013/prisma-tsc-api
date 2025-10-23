import fastify, { type FastifyInstance } from "fastify";
import * as ReviewController from "../controller/review.controller"

export async function reviewRoutes(app : FastifyInstance) {
    app.get("/review", async (req,res) => {
        const {include} = req.query as {include: string};
        const includeData = include === "true";
    return ReviewController.getAllReviewsHandler(req, res, includeData);
  })
}

