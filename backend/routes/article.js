import express from "express";
import fs from "node:fs/promises";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const router = express.Router();

// To get all the articles
router.get("/", async (req, res, next) => {
  // Below 3 lines of code are used to access ../data/articles-info.js file.
  // first __filename is taken. fileURLToPath() converts fileName URL object
  // which we get from import.meta.url to a string.
  // Secondly, __filename (current file location) is used to get current folder path.
  // dirname() returns path to the folder of specified file path.
  // After that we join these two paths to make it a single path.
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, "../data/articles-info.js");

  try {
    const response = await fs.readFile(filePath, {encoding:"utf-8"});
    console.log(response.toString());
    res.json(response.toString());
  } catch (error) {
    next(error);
    // next calls next error handling route (usually located into app.js)
  }
});

// To get a specific article
router.get("/:id", () => {});
// To add a article
router.post("/", () => {});
// To update a specific article
router.put("/:id", () => {});

export default router;
