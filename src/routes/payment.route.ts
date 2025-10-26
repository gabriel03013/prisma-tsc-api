import type { FastifyInstance } from "fastify";
import * as PaymentController from "../controller/payment.controller";
import { parseBoolean } from "../utils";


export async function paymentRoutes(app: FastifyInstance) {
    app.get("/payment", async (req, res) => {
        const { include } = req.query as { include: string };
        return PaymentController.getAllPaymentsHandler(req, res, parseBoolean(include));
    })

    app.get("/payment/:id", async (req, res) => {
        const { id } = req.params as { id: string };
        const { include } = req.query as { include: string };
        return PaymentController.getPaymentByIdHandler(req, res, Number(id), parseBoolean(include));
    })

    app.get("/payment/order/:id", async (req, res) => {
        const {id} = req.params as {id: string};
        const {include} = req.query as {include:string};
        return PaymentController.getPaymentByOrderIdHandler(req, res, Number(id), parseBoolean(include));
    })
}