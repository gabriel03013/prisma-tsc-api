import type { product, user } from "../generated/prisma";

export interface Review {
  id: number;
  userId?: number;
  productId?: number;
  rating?: number;
  comment?: string;
  created_at?: Date;
  product?: product;
  user?: user;
}