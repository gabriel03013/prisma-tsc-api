import type { FastifyRequest, FastifyReply } from "fastify";
import * as ReviewService from "../services/review.service";

export async function getAllReviewsHandler(req: FastifyRequest, res: FastifyReply, include: boolean = false) {
    return res.send(await ReviewService.getAllReviews(include))
}

export async function getReviewByIdHandler(req: FastifyRequest, res: FastifyReply, id: number, include: boolean = false) {
    return res.send(await ReviewService.getReviewById(id, include))
}

export async function getReviewByUserIdHandler(req: FastifyRequest, res: FastifyReply, userId: number, include: boolean = false) {
    return res.send(await ReviewService.getReviewByUserId(userId, include))
}

export async function getReviewByProductId(req: FastifyRequest, res: FastifyReply, productId: number, include: boolean = false) {
    return res.send(await ReviewService.getReviewByProductId(productId, include))
}