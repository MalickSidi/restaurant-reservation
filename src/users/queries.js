const userQueryies = {};

userQueryies.getAll = "SELECT user_number, user_name FROM users";

userQueryies.createUser =
  "INSERT INTO users (user_number, user_name, user_password) VALUES ($1, $2, $3)";

userQueryies.findUserById =
  "SELECT user_number, user_password, user_name from users WHERE user_number = $1";

export default userQueryies;
