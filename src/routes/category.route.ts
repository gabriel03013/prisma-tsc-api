import type { FastifyInstance } from "fastify";
import * as CategoryController from "../controller/category.controller";
import { parseBoolean } from "../utils";

export async function categoryRoutes(app: FastifyInstance): Promise<void> {
    app.get("/category", async (req, res) => {
        const { include } = req.query as { include: string };
        return CategoryController.getAllCategorysHandler(req, res, parseBoolean(include))
    })

    app.get("/category/:id", async (req, res) => {
        const { id } = req.params as { id: string };
        const { include } = req.query as {include: string};
        return CategoryController.getCategoryByIdHandler(req, res, Number(id), parseBoolean(include))
    })

    app.get("/category/name/:name", async (req, res) => {
        const {name} = req.params as {name:string}
        const {include} = req.query as {include:string}
        return CategoryController.getCategoryByNameHandler(req, res, name, parseBoolean(include))
    })
}