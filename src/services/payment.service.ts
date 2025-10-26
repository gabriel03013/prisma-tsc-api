import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

export async function getAllPayments(include: boolean = false) {
    const payments = prisma.payment.findMany({
        include: {
            order: include
        }
    })
    return payments;
}

export async function getPaymentById(paymentId: number, include: boolean = false) {
    const payment = prisma.payment.findUnique({
        where: {
            id: paymentId
        }, include: {
            order: include
        }
    })
    return payment;
}

export async function getPaymentByOrderId(orderId: number, include: boolean = false) {
    const payment = prisma.payment.findMany({
        where: {
            order_id: orderId
        }, include: {
            order: include
        }
    })
    return payment;
}