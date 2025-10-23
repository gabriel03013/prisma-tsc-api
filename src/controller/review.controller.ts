import type { FastifyRequest, FastifyReply } from "fastify";
import { getAllReviews } from "../services/review.service";


export async function getAllReviewsHandler(req: FastifyRequest, res: FastifyReply, include : boolean = false) {
    return getAllReviews(include);
}