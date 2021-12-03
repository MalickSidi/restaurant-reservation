import { pool } from "../db/db.js";
import reservationQueries from "./queries.js";

const getAllReservation = async (req, res) => {
  try {
    const reservation = await pool.query(reservationQueries.getAll);
    res.status(200).json({ reservations: reservation.rows });
  } catch (error) {
    res.status(400).json(error);
  }
};

const createReservaion = async (req, res) => {
  const { start, end, seets } = req.body;
  if (seets > 6)
    return res
      .status(405)
      .json({ message: "The maximum seets avaliable are 6" });

  try {
    const table = await pool.query(reservationQueries.findTable, [seets]);
    console.log(table);

    if (table.rowCount > 1) console.log("more than table avaliable");

    const newReservation = await pool.query(reservationQueries.createRes, [
      start,
      end,
      table.rows[0].table_id,
    ]);
    res.status(201).json({ reservation: newReservation.rows[0] });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export { getAllReservation, createReservaion };
