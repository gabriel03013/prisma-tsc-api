import type { product } from "../generated/prisma";

export interface Category {
    id: number;
    name: string;
    description: string;
    product: product[];
}