import { db } from "../db/db.js";

export async function getAll() {
  try {
    const query = "SELECT * FROM articles";
    const [results] = await db.query(query);
    return results;
  } catch (err) {
    throw new Error(err);
  }
}

export async function get(articleId) {
  try {
    const query = "SELECT * FROM articles WHERE id = ?";
    const [results] = await db.query(query, [articleId]);
    return results[0];
  } catch (err) {
    throw new Error(err);
  }
}
