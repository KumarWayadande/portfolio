import express from "express";
import { addPost, get, getAll } from "../controller/articles.js";
import { checkAuthMiddleware } from "../util/auth.js";

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


router.use(checkAuthMiddleware);

// To add a article
router.post("/", async (req, res, next) => {
  try {
    await addPost(req, res);  
    res.json({ message: "Article created successfully" });
  } catch (error) {
    next(error);
  }
});
// To update a specific article
router.put("/:id", () => {});

export default router;
