import type { FastifyRequest, FastifyReply } from "fastify";
import * as CategoryService from "../services/category.service"

export async function getAllCategorysHandler(req: FastifyRequest, res: FastifyReply, include: boolean = false) {
    return res.send(await CategoryService.getAllCategorys(include));
}

export async function getCategoryByIdHandler(req: FastifyRequest, res: FastifyReply, categoryId: number, include: boolean = false) {
    return res.send(await CategoryService.getCategoryById(categoryId, include));
}

export async function getCategoryByNameHandler(req: FastifyRequest, res: FastifyReply, categoryName: string, include: boolean = false) {
    return res.send(await CategoryService.getCategoryByName(categoryName, include));
}