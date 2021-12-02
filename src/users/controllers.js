import { pool } from "../db/db.js";
import userQueryies from "./query.js";

const getUsers = (res) => {
  try {
    const users = pool.query(userQueryies.getAll);
    return res.status(200).json({ users: users.rows });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export { getUsers };
