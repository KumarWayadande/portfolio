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
    const data = {
      id: results[0].id,
      title: results[0].title,
      contents: JSON.parse(results[0].contents),
      articleImg: results[0].articleImg,
      articleDate: results[0].articleDate,
    };
    return data;
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
    JSON.stringify(req.body.contents),
    req.body.articleImg,
    req.body.articleDate,
  ];
  // console.log(values);

  db.query(q, [values], (err) => {
    if (err) return res.status(500).json("Post couldnt be created");

    return res.status(200).json("Post added successfully");
  });
};
