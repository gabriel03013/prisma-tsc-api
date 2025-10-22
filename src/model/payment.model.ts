import type { order } from "../generated/prisma";

export interface Payment {
  id: number;
  orderId?: number;
  method?: string;
  status?: "PENDING" | "DONE";
  amout?: number
  created_at? : Date;
  order? : order;
}
