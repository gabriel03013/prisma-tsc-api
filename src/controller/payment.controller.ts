import type { FastifyRequest, FastifyReply } from "fastify";
import * as PaymentService from "../services/payment.service";

export async function getAllPaymentsHandler(req: FastifyRequest, res: FastifyReply, include: boolean = false) {
    return res.send(await PaymentService.getAllPayments(include));
}

export async function getPaymentByIdHandler(req: FastifyRequest, res: FastifyReply, paymentId: number, include: boolean = false) {
    return res.send(await PaymentService.getPaymentById(paymentId, include));
}

export async function getPaymentByOrderIdHandler(req: FastifyRequest, res: FastifyReply, orderId: number, include: boolean = false) {
    return res.send(await PaymentService.getPaymentByOrderId(orderId, include));
}