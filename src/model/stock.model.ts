import type { product } from "../generated/prisma";

export interface Stock {
    id:number;
    productId?: number;
    quantity: number;
    product? : product;
}