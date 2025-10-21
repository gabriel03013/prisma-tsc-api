import type { category, order_item, review, stock, supplier } from "../generated/prisma";

export interface Product {
  id: number;
  name: string;
  description?: number;
  price: number;
  categoryId?: number;
  supplierId?: number;
  orderItem: order_item[];
  category?: category;
  supplier? : supplier;
  review: review[];
  stock: stock[];
}
