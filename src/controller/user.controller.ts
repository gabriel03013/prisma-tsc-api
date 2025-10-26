import type { FastifyReply, FastifyRequest } from "fastify";
import { getAllUsers, getUserById, getUserByName, getUserByEmail } from "../services/user.service";

export async function getAllUsersHandler(req: FastifyRequest, res: FastifyReply, include: boolean = false) {
    return res.send(await getAllUsers(include));
}

export async function getUserByIdHandler(req: FastifyRequest, res: FastifyReply, id: number, include: boolean = false) {
    return res.send(await getUserById(id, include));
}

export async function getUserByNameHandler(req: FastifyRequest, res: FastifyReply, name: string, include: boolean = false) {
    return res.send(await getUserByName(name, include));
}

export async function getUserByEmailHandler(req: FastifyRequest, res: FastifyReply, email: string, include: boolean = false) {
    return res.send(await getUserByEmail(email, include));
}