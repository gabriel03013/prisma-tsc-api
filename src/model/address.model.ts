import type { user } from "../generated/prisma";

export interface Address {
  id: number;
  userId?: number;
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  user?: user;
}