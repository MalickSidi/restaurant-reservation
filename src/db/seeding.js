import pg from "pg";
import tableQueries from "./query.js";

const { Pool } = pg;

let table1 = "insert into rest_tables (table_id, table_seets) VALUES (1, 2)";
let table2 = "insert into rest_tables (table_id, table_seets) VALUES (2, 2)";
let table3 = "insert into rest_tables (table_id, table_seets) VALUES (3, 4)";
let table4 = "insert into rest_tables (table_id, table_seets) VALUES (4, 6)";

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

const seed = async () => {
  const setTimezone = await pool.query("SET timezone = 'Asia/Riyadh'");

  const userTable = await pool.query(tableQueries.users, (err, res) => {
    if (err) console.log(err);
  });

  const rest_tables = await pool.query(tableQueries.tables, (err, res) => {
    if (err) console.log(err);
  });

  const reservation = await pool.query(tableQueries.reservation, (err, res) => {
    if (err) console.log(err);
    console.log("Seeding Databese: Done");
  });

  const rest_table1 = await pool.query(table1);
  const rest_table2 = await pool.query(table2);
  const rest_table3 = await pool.query(table3);
  const rest_table4 = await pool.query(table4);

  process.exit();
};

seed();
