import { Router } from "express";
import middleware from "../middlewares/index.js";
import { getAllReservation, createReservaion } from "./controllers.js";

const reservationRouter = new Router();

reservationRouter.get("/", middleware.auth, getAllReservation);
reservationRouter.post("/", middleware.auth, createReservaion);

export default reservationRouter;
