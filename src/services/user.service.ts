import { PrismaClient } from "../generated/prisma";
import type { User } from "../model/user.model";

const prisma = new PrismaClient();

// ===========================================
//                GET METHODS
// ===========================================
export async function getAllUsers(include: boolean = false): Promise<User[]> {
    const users: User[] = await prisma.user.findMany(
        {
            include: {
                address: include,
                order: include,
                review: include
            }
        }
    );
    return users;
}

export async function getUserById(id: number, include: boolean = false): Promise<User | null> {
    const user: User | null = await prisma.user.findUnique({
        where: {
            id: id
        },
        include: {
            address: include,
            order: include,
            review: include
        }
    })
    return user;
}

export async function getUserByName(name: string, include: boolean = false): Promise<User[]> {
    const users: (User[]) = await prisma.user.findMany({
        where: {
            name: name,
        },
        include: {
            address: include,
            order: include,
            review: include
        }
    })
    return users;
}

export async function getUserByEmail(email: string, include: boolean = false): Promise<User | null> {
    const user: (User | null) = await prisma.user.findUnique({
        where: {
            email: email
        },
        include: {
            address: include,
            order: include,
            review: include
        }
    })
    return user;
}

// * ===========================================
// *              UPDATE METHODS
// * ===========================================