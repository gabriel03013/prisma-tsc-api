import fastify from "fastify";
import { userRoutes } from "./routes/user.route";

const app = fastify({ logger: true });

// * =========================================
// *                SERVER
// * =========================================
const startServer = async () => {
  try {
    app.get("/", () => {
      return "hello bun!";
    });

    app.register(userRoutes);

    app
      .listen({ port: 3000 })
      .then(() => console.log("server running"))
      .catch((err) => {
        console.log(err);
      });

  } catch (err) {
    console.log(err)
    process.exit(1);
  }
}

startServer();