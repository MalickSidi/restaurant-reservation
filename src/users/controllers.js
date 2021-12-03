import bcrypt from "bcrypt";
import { pool } from "../db/db.js";
import { accessToken } from "../utils/jwt_utils.js";
import userQueryies from "./queries.js";

const getUsers = async (req, res) => {
  try {
    const users = await pool.query(userQueryies.getAll);
    return res.status(200).json({ users: users.rows });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createUser = async (req, res) => {
  const number = req.body.user_number;

  const name = req.body.user_name;
  const password = req.body.user_password;

  try {
    if (number.toString().length != 4) {
      return res
        .status(400)
        .json({ message: "Error: Make sure Employ number length equal 4" });
    }

    const hashed_password = await bcrypt.hash(password, 10);

    const created_user = await pool.query(userQueryies.createUser, [
      number,
      name,
      hashed_password,
    ]);
    const token = accessToken({ number, name });
    res.status(201).json({ message: "user created", access_token: token });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const loginUser = async (req, res) => {
  const { user_number, user_password } = req.body;
  if (user_number == undefined || user_password == undefined)
    return res.status(400).json({
      message:
        "Error: Request must have [user_number: int, user_password: string]",
    });

  try {
    const user = await pool.query(userQueryies.findUserById, [user_number]);
    // console.log(user.rows[0]);
    if (user.rows.length == 0) {
      res.status(404).json({ message: "User Unavailable" });
    }
    const validPassword = await bcrypt.compare(
      user_password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json({ message: "Error: Incorrect password" });
    }

    const { user_name } = user.rows[0];
    let token = accessToken({ user_number, user_name });

    return res.status(200).json({ access_token: token });
  } catch (error) {
    res.status(400).json(error);
  }
};

export { getUsers, createUser, loginUser };
