CREATE DATABASE resturant;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users IF NOT EXISTS ( 
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_V4(), 
  user_name TEXT NOT NULL, 
  user_number INT NOT NULL UNIQUE, 
  user_password VARCHAR(250) NOT NULL
);

CREATE TABLE IF NOT EXISTS rest_tables (
    table_id INT PRIMARY KEY,
    table_seets INT NOT NULL
)

CREATE TABLE IF NOT EXISTS reservation (\
    id uuid PRIMARY KEY DEFAULT uuid_generate_V4,
    time_start TIMESTAMP NOT NULL,
    time_end TIMESTAMP NOT NULL,
    table_id INT REFERENCES rest_tables (table_id) NOT NULL
)

insert into rest_tables (table_id, table_seets) VALUES (1, 2);
insert into rest_tables (table_id, table_seets) VALUES (2, 2);
insert into rest_tables (table_id, table_seets) VALUES (3, 4);
insert into rest_tables (table_id, table_seets) VALUES (4, 6);
