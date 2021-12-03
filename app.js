import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./src/users/routes.js";
import reservationRouter from "./src/reservation/routes.js";

dotenv.config();

const app = express();

const PORT = 5000 || process.env.APP_PORT;
const corsOptions = { credentials: true, origin: process.env.URL || "*" };

app.use(json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/reservation", reservationRouter);

app.get("/", (req, res) => {
  res.status("200").json({ message: "It's Working for now" });
});

app.listen(PORT, () => {
  console.log(`Listing on port: ${PORT}`);
});
