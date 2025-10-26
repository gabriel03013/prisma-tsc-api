import * as OrderService from '../services/order.service';
import type { FastifyRequest, FastifyReply } from 'fastify';

export async function getAllOrdersHandler(req: FastifyRequest, res: FastifyReply, include : boolean = false) {
    return res.send(await OrderService.getAllOrders(include));
}

export async function getOrderByIdHandler(req: FastifyRequest, res: FastifyReply, orderId: number, include : boolean = false) {
    return res.send(await OrderService.getOrderById(orderId,include));
}

export async function getOrdersByUserIdHandler(req: FastifyRequest, res: FastifyReply, userId : number, include : boolean = false) {
    return res.send(await OrderService.getOrdersByUserId(userId, include));
}