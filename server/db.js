import mysql from "mysql2";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",       // apna MySQL username
  password: "",       // agar password set ho to yaha daalo
  database: "portfolio_db"
});
