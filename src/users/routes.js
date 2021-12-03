import { Router } from "express";
import { getUsers, createUser, loginUser } from "./controllers.js";
import middleware from "../middlewares/index.js";

const userRouter = Router();

userRouter.get("/", middleware.auth, getUsers);
userRouter.post("/", createUser);
userRouter.post("/login", loginUser);

export default userRouter;
