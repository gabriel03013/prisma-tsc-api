import fastify from "fastify";

const app = fastify({ logger: true });

app.get("/", () => {
  return "hello bun!";
});

app
  .listen({ port: 3000 })
  .then(() => console.log("server running"))
  .catch((err) => {
    console.log(err);
  });
