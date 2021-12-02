import pg from "pg";
import tableQueries from "./query.js";

const { Pool } = pg;

const localConfig = {
  user: "admin",
  password: "admin1234",
  host: "localhost",
  port: "2345",
  database: "restaurant",
};

export const pool = new Pool(localConfig);

pool.query(tableQueries.users, (err, res) => {
  if (err) console.log(err);
});

pool.query(tableQueries.tables, (err, res) => {
  if (err) console.log(err);
});

pool.query(tableQueries.reservation, (err, res) => {
  if (err) console.log(err);
  console.log("Create all tables");
});
