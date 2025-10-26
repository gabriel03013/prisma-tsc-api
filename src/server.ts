import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { userRoutes } from "./routes/user.route";
import { reviewRoutes } from "./routes/review.route";
import { categoryRoutes } from "./routes/category.route";
import { orderRoutes } from "./routes/order.route";
import { productRoutes } from "./routes/product.route";
import { paymentRoutes } from "./routes/payment.route";

const app = fastify({ logger: true });

// * =========================================
// *                SERVER
// * =========================================
const startServer = async () => {
  try {
    app.get("/", () => {
      return "hello bun!";
    });
    app.register(fastifyCors)
    app.register(userRoutes);
    app.register(reviewRoutes);
    app.register(categoryRoutes);
    app.register(orderRoutes);
    app.register(productRoutes);
    app.register(paymentRoutes);

    app
      .listen({ port: 8000 })
      .then(() => console.log("server running on localhost:8080"))
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

startServer();
