import { Router } from "express";
import { getUsers } from "./controllers.js";

const userRouter = Router();

userRouter.get("/", getUsers);

export default userRouter;
