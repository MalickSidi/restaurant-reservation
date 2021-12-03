import jwt from "jsonwebtoken";

export const accessToken = (user) =>
  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1020m",
  });
