import type { product } from "../generated/prisma";

export interface Supplier {
    id : number;
    name : string;
    contact? : string;
    product : product[];
}