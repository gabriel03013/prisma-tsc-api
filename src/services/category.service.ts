import { PrismaClient, type category } from "../generated/prisma";
const prisma = new PrismaClient();

export async function getAllCategorys(include : boolean = false) {
    const categorys = await prisma.category.findMany({
        include : {
            product : include
        }
    });
    return categorys;
} 

export async function getCategoryById(categoryId : number, include : boolean = false) {
    const category = await prisma.category.findUnique({
        where : {
            id : categoryId
        }, include : {
            product : include
        }
    })
    return category;
}

export async function getCategoryByName(categoryName : string, include : boolean = false) {
    const category = await prisma.category.findUnique({
        where : {
            name : categoryName
        }, include : {
            product : include
        }
    })
    return category;
}