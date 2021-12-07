# Restaurant Reservations

Restaurant Tables

- 2 Tables with 2 seats.
- 1 Table with 4 seats.
- 1 Table with 6 seats.

### Run The app
1. Setup the database following `src/db/db.sql`
  - Make sure you have these environments varibles:
    - `DB_USER`
    - `DB_PASSWORD`
    - `DB_HOST`
    - `DB_PORT`
    - `DB_NAME`

3. For JWT you need to have environment varible: `ACCESS_TOKEN_SECRET` with any random text value
4. use: `npm i` to install all required dependencies
1. use: `npm start` to start the api

### Available API endpoins
1. GET `/api/v1/users` __Authorization__: acces_token
  - Return list of all restruant employes
2. POST `/api/v1/users` 
  - Create new employ
    - Body { user_number, user_name, user_password }
    - return access_token
3. POST `/api/v1/users/login`
  - Body { user_number, user_password }
  - return access_token
4. GET `/api/v1/reservation` __Authorization__: acces_token
  - Return all reservaions
5. POST `/api/v1/reservation` __Authorization__: acces_token
  - body {start, end, seets}
