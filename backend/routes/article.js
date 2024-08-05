import express from "express";
import { addPost, get, getAll } from "../controller/articles.js";

const router = express.Router();

// To get all the articles
router.get("/", async (req, res, next) => {
  try {
    const result = await getAll();
    res.json({ articles: result });
  } catch (error) {
    next(error);
  }
});

// To get a specific article
router.post("/:id", async (req, res, next) => {
  try {
    const result = await get(req.body.articleId);
    res.json({ article: result || null });
  } catch (error) {
    next(error);
  }
});

// To add a article
router.post("/", addPost);
// To update a specific article
router.put("/:id", () => {});

export default router;
