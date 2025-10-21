import type { order_item, payment, user } from "../generated/prisma";

export interface Pedido {
    id : number;
    userId? : number;
    created_at: Date;
    status? : "PENDENTE" | "ENTREGUE";
    user?: user[];
    productOrder : order_item[];
    payment: payment[];
}