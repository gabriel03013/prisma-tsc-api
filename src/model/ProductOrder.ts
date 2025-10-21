import type { order, product } from "../generated/prisma";

export interface ProductOrder {
  id: number;
  orderId?: number;
  productID?: number;
  quantity: number;
  unitPrice: number;
  order?: order;
  product?: product;
}
