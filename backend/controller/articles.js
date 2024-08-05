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

export const addPost = async (req, res) => {
  console.log("Logged");
  
    const q =
      "Insert into articles(`title`, `contents`, `articleImg`, `articleDate`) values(?)";

    const values = [
      req.body.title,
      req.body.contents,
      req.body.articleImg,
      req.body.articleDate,
    ];

    db.query(q, [values], (err) => {
      if (err) return res.status(500).json("Post couldnt be created");

      return res.status(200).json("Post added successfully");
    });
  }