import { afterAll, describe, expect, it } from "bun:test";
import { buildApp } from "./server";
import type { FastifyReply, FastifyRequest } from "fastify";
import type { ReviewRouteHandlers } from "./routes/review.route";
import type { UserRouteHandlers } from "./routes/user.route";

const userHandlers = {
  getAllUsersHandler: async (_request: FastifyRequest, _reply: FastifyReply, include: boolean) => ({ include }),
  getUserByIdHandler: async (_request: FastifyRequest, _reply: FastifyReply, id: number, include: boolean) => ({ id, include }),
  getUserByNameHandler: async (_request: FastifyRequest, _reply: FastifyReply, name: string, include: boolean) => ({ name, include }),
  getUserByEmailHandler: async (_request: FastifyRequest, _reply: FastifyReply, email: string, include: boolean) => ({ email, include }),
} as unknown as UserRouteHandlers;

const reviewHandlers = {
  getAllReviewsHandler: async (_request: FastifyRequest, _reply: FastifyReply, include: boolean) => ({ include }),
  getReviewByIdHandler: async (_request: FastifyRequest, _reply: FastifyReply, id: number, include: boolean) => ({ id, include }),
  getReviewByUserIdHandler: async (_request: FastifyRequest, _reply: FastifyReply, userId: number, include: boolean) => ({ userId, include }),
  getReviewByProductId: async (_request: FastifyRequest, _reply: FastifyReply, productId: number, include: boolean) => ({ productId, include }),
} as unknown as ReviewRouteHandlers;

const app = buildApp({
  logger: false,
  userHandlers,
  reviewHandlers,
});

afterAll(async () => {
  await app.close();
});

describe("Fastify API", () => {
  it("reports a healthy service without querying the database", async () => {
    const response = await app.inject({ method: "GET", url: "/health" });

    expect(response.statusCode).toBe(200);
    expect(response.json<{ status: string }>()).toEqual({ status: "ok" });
  });

  it("keeps the root endpoint available", async () => {
    const response = await app.inject({ method: "GET", url: "/" });

    expect(response.statusCode).toBe(200);
    expect(response.body).toBe("hello bun!");
  });

  it("parses user route parameters and include query values", async () => {
    const response = await app.inject({ method: "GET", url: "/user/42?include=true" });

    expect(response.statusCode).toBe(200);
    expect(response.json<{ id: number; include: boolean }>()).toEqual({ id: 42, include: true });
  });

  it("parses review filters and treats unrecognized include values as false", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/review/product/7?include=yes",
    });

    expect(response.statusCode).toBe(200);
    expect(response.json<{ productId: number; include: boolean }>()).toEqual({ productId: 7, include: false });
  });
});
