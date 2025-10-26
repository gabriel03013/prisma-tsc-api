import type { FastifyRequest, FastifyReply } from "fastify";
import * as ProductService from "../services/product.service";

export async function getAllProductsHandler(req: FastifyRequest, res: FastifyReply, include: boolean = false) {
    return res.send(await ProductService.getAllProducts(include));
}

export async function getProductByIdHandler(req: FastifyRequest, res: FastifyReply, productId: number, include: boolean = false) {
    return res.send(await ProductService.getProductById(productId, include));
}

export async function getProductsByCategoryIdHandler(req: FastifyRequest, res: FastifyReply, categoryId: number, include: boolean = false) {
    return res.send(await ProductService.getProductsByCategoryId(categoryId, include));
}

export async function getProductBySupplierIdHandler(req: FastifyRequest, res: FastifyReply, supplierId: number, include: boolean = false) {
    return res.send(await ProductService.getProductsBySupplierId(supplierId, include));
}

export async function getProductsByNameIdHandler(req: FastifyRequest, res: FastifyReply, productName: string, include: boolean = false) {
    return res.send(await ProductService.getProductsByName(productName, include));
}