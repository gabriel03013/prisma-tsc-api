import { type FastifyInstance } from "fastify";
import * as UserController from "../controller/user.controller";


export async function userRoutes(app: FastifyInstance): Promise<void> {

  // * =======================================
  // *              GET ROUTES
  // * =======================================


  // * getAllUsers -> returns all the users
  // * Params -> optional -> include : boolean
  app.get("/user", async (req, res) => {
    const { include } = req.query as { include?: string };
    const includeData = include === "true";
    return UserController.getAllUsersHandler(req, res, includeData);
  });

  // * getUserById -> returns the user with the specified ID or returns an empty array

  app.get("/user/:id", async (req, res) => {
    const { id } = req.params as { id: string };
    const { include } = req.query as { include?: string };

    const includeData = include === "true";

    return UserController.getUserByIdHandler(req, res, Number(id), includeData);
  });

  // * getUserByName -> returns the user/users with the specified NAME or returns an empty array
  //  * /user/name -> non-existed endpoint, returns an empty array by default, but this route provides a message to the developer saying the endpoint does not exists

  app.get("/user/name", async (req, res) => {
    return res.status(404).send("This endpoint does not exists, try /user/name/{user name}")
  })

  //  * /user/name/:name -> returns the user/users with the specified NAME or returns an empty array
  // * Params -> name : string | optional -> include : boolean

  app.get("/user/name/:name", async (req, res) => {
    const { name } = req.params as { name: string }
    const { include } = req.query as { include?: string }
    const includeData = include === "true";
    return UserController.getUserByNameHandler(req, res, name, includeData);
  })

  // * getUserByEmail -> returns the user with the specified EMAIL or returns an empty array
  // * /user/email -> this endpoint does not exists, returns a 404 response with a message to the developer
  app.get("/user/email", async (req, res) => {
    return res.status(404).send("This endpoint does not exists, try /user/email/{user email}")
  })
  

  // * /user/email/:email -> returns the user with the specified EMAIL or returns an empty array
  // * Params -> email : string | optional -> include : boolean
  app.get("/user/email/:email", async (req, res) => {
    const {email} = req.params as {email: string}
    const {include} = req.query as {include?: string}
    const includeData = include === "true";
    return UserController.getUserByEmailHandler(req, res, email, includeData)
  })

}
