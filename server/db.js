import mysql from "mysql2";

export const db = mysql.createPool({
  host: "gateway01.ap-southeast-1.prod.aws.tidbcloud.com",
  user: "wNMoHQ6vRPRqbSC.root",       // apna MySQL username
  password: "AHJGAdD7D76d",       // agar password set ho to yaha daalo
  database: "message"
});
