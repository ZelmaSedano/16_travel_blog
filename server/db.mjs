import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getPost1 = () => db.any("SELECT * FROM post");

export const getPost2 = () => db.any("SELECT * FROM post2");

export const getPost3 = () => db.any("SELECT * FROM post3");

export const getPost4 = () => db.any("SELECT * FROM post4");

// Adding Post to Table 4
export const addPost = async ({
  title,
  date,
  places_to_visit,
  description,
}) =>
  await db.any(
    "INSERT INTO post4(title, date, places_to_visit, description) VALUES($1, $2, $3, $4)",
    [
      title,
      date,
      places_to_visit,
      description,
    ],
  );

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
