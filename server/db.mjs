import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getPost1 = () => db.any("SELECT * FROM post");

export const getPost2 = () => db.any("SELECT * FROM post2");

export const getPost3 = () => db.any("SELECT * FROM post3");

// export const addTask = (name) =>
//   db.any("INSERT INTO tasks(name) VALUES(${name}) RETURNING *", { name });

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
