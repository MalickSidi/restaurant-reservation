import jwt from "jsonwebtoken";

const middleware = {};

middleware.auth = (req, res, next) => {
  console.log("in auth");
  const authHeader = req.headers["authorization"];
  if (authHeader == undefined)
    return res.status(401).json({ message: "Error: No access token provided" });
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) return res.status(401).json({ Error: "Null token" });
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) return res.status(403).json({ Error: error });

    req.user = user;
    next();
  });
};

export default middleware;
