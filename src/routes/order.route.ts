import type { FastifyInstance } from "fastify";
import * as OrderController from "../controller/order.controller"
import { parseBoolean } from "../utils";

export async function orderRoutes(app: FastifyInstance) {
    app.get("/order", async (req, res) => {
        const { include } = req.query as { include: string };
        return OrderController.getAllOrdersHandler(req, res, parseBoolean(include));
    })

    app.get("/order/:id", async (req, res) => {
        const { id } = req.params as { id: string };
        const { include } = req.query as { include: string };
        return OrderController.getOrderByIdHandler(req, res, Number(id), parseBoolean(include))
    })

    app.get("/order/user/:id", async (req, res) => {
        const { id } = req.params as { id: string };
        const { include } = req.query as { include: string };
        return OrderController.getOrdersByUserIdHandler(req, res, Number(id), parseBoolean(include));
    })
}