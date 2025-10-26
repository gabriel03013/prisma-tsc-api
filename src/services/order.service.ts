import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

export async function getAllOrders(include : boolean = false) {
    const orders = prisma.order.findMany({
        include: {
            user : include,
            order_item : include,
            payment : include
        }
    })
    return orders;
}

export async function getOrderById(orderId : number, include : boolean = false) {
    const order = prisma.order.findUnique({
        where : {
            id : orderId
        }, include : {
            user : include,
            order_item : include,
            payment : include
        }
    })
    return order;
}

export async function getOrdersByUserId(userId : number, include : boolean = false) {
    const order = prisma.order.findMany({
        where : {
            user_id : userId
        }, include : {
            user : include,
            order_item : include,
            payment : include
        }
    })
    return order;
}