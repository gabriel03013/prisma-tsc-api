import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

export async function getAllProducts(include: boolean = false) {
    const products = await prisma.product.findMany({
        include: {
            category: include,
            order_item: include,
            review: include,
            stock: include,
            supplier: include
        }
    })
    return products;
}

export async function getProductById(productId: number, include: boolean = false) {
    const product = await prisma.product.findUnique({
        where: {
            id: productId
        }, include: {
            category: include,
            order_item: include,
            review: include,
            stock: include,
            supplier: include
        }
    })
    return product;
}

export async function getProductsByCategoryId(categoryId: number, include: boolean = false) {
    const product = await prisma.product.findMany({
        where: {
            category_id: categoryId
        }, include: {
            category: include,
            order_item: include,
            review: include,
            stock: include,
            supplier: include
        }
    });
    return product;
}

export async function getProductsBySupplierId(supplierId: number, include: boolean = false) {
    const products = prisma.product.findMany({
        where: {
            supplier_id: supplierId
        }, include: {
            category: include,
            order_item: include,
            review: include,
            stock: include,
            supplier: include
        }
    })
    return products;
}

export async function getProductsByName(name: string, include: boolean = false) {
    const products = prisma.product.findMany({
        where: {
            name: name
        }, include: {
            category: include,
            order_item: include,
            review: include,
            stock: include,
            supplier: include
        }
    })
    return products;
}