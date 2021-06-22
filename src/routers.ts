import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateUserService } from "./services/CreateUserService";

const router = Router();

const createUserController = new CreateUserController();

router.post("/users", createUserController.handle);

export { router };