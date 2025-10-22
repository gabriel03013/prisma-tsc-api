import type { address, order, review } from "../generated/prisma";

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    created_at? : Date | null ;
    address?: address[];
    order?: order[];
    review?: review[];
}