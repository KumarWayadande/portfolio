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
      description: results[0].description,
    };
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export const addPost = async (req, res) => {
  const q =
    "Insert into articles(`title`, `contents`, `articleImg`, `articleDate`, `description`) values(?)";

    // console.log(req);
    // console.log("This line completed");
    
  const values = [
    req.body.title,
    req.body.contents,
    req.body.articleImg,
    req.body.articleDate,
    req.body.description,
  ];

  try {
    await db.query(q, [values]);
    return {message : "Article added successfully"};
  } catch (err) {
    throw new Error(err);
  }
};
