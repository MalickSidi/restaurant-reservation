const tableQueries = {};

tableQueries.employeesTable =
  "CREATE TABLE employees IF NOT EXISTS ( employ_id uuid PRIMARY KEY DEFAULT uuid_generate_V4(), employ_name TEXT NOT NULL, employ_number INT NOT NULL UNIQUE, employ_password TEXT NOT NULL)";

tableQueries.users =
  "CREATE TABLE IF NOT EXISTS users (\
    user_number INT PRIMARY KEY,\
    user_name VARCHAR(250) NOT NULL,\
    user_password varchar(32))";

tableQueries.tables =
  "CREATE TABLE IF NOT EXISTS rest_tables (\
    table_id INT PRIMARY KEY,\
    table_seets INT NOT NULL)";

tableQueries.reservation =
  "CREATE TABLE IF NOT EXISTS reservation (\
    id INT PRIMARY KEY,\
    timeslotes TIMESTAMP,\
    table_id INT REFERENCES rest_tables (table_id)\
    )";

export default tableQueries;
