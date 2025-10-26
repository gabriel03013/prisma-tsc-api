import type { FastifyInstance } from "fastify";
import * as ProductController from "../controller/product.controller";
import { parseBoolean } from "../utils";

export async function productRoutes(app: FastifyInstance) {
    app.get("/product", async (req, res) => {
        const { include } = req.query as { include: string };
        return ProductController.getAllProductsHandler(req, res, parseBoolean(include));
    })

    app.get("/product/:id", async (req, res) => {
        const { id } = req.params as { id: string };
        const { include } = req.query as { include: string };
        return ProductController.getProductByIdHandler(req, res, Number(id), parseBoolean(include));
    })

    app.get("/product/category/:id", async (req, res) => {
        const { id } = req.params as { id: string };
        const { include } = req.query as { include: string };
        return ProductController.getProductsByCategoryIdHandler(req, res, Number(id), parseBoolean(include));
    })

    app.get("/product/supplier/:id", async (req,res) => {
        const {id} = req.params as {id:string};
        const {include} = req.query as {include:string};
        return ProductController.getProductBySupplierIdHandler(req, res, Number(id), parseBoolean(include));
    })

    app.get("/product/name/:name", async (req,res) => {
        const {name} = req.params as {name:string};
        const {include} = req.query as {include:string};
        return ProductController.getProductsByNameIdHandler(req, res, name, parseBoolean(include));
    })
}