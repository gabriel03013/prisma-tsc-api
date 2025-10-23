import { PrismaClient, type product, type review, type user } from "../generated/prisma";

const prisma = new PrismaClient();


export async function getAllReviews(include: boolean = false) {
    const reviews = await prisma.review.findMany({
        include: {
            product: include,
            user: include
        }
    });
    return reviews;
}

export async function getReviewById(id: number, include: boolean = false) {
    const review  = await prisma.review.findUnique({
        where : {
            id : id
        }, include: {
            product : include,
            user: include
        }
    })
    return review;
}

export async function getReviewByUserId(userId : number, include : boolean = false) {
    const reviews = await prisma.review.findMany({
        where : {
            user_id : userId
        }, include : {
            product: include,
            user: include
        }
    })
    return reviews;
}

export async function getReviewByProductId(productId: number, include : boolean = false) {
    const reviews = await prisma.review.findMany({
        where : {
            product_id: productId
        }, include : {
            product : include,
            user: include
        }
    }) 
    return reviews;
}
