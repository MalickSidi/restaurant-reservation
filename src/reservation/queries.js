const reservationQueries = {};

reservationQueries.getAll = "SELECT * FROM reservation WHERE table_seets";
reservationQueries.getAllSeets = "SELECT * FROM reservation WHERE table_seets >= $1";

reservationQueries.createRes =
  "INSERT INTO reservation (time_start, time_end, table_id) VALUES ($1, $2, $3) RETURNING * ";

reservationQueries.findTable = "SELECT * FROM rest_tables WHERE table_seets >= $1"

export default reservationQueries;
