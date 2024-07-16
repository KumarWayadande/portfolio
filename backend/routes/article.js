import express from "express";
import { getAll } from "../controller/articles.js";



const router = express.Router();

// To get all the articles
router.get("/", async(req, res, next) => {
    try{
        const result = await getAll();
        console.log(result);
        res.json({articles:result});
    }
    catch(error){
        next(error);
    }
});

// To get a specific article
router.get("/:id", () => {});
// To add a article
router.post("/", () => {});
// To update a specific article
router.put("/:id", () => {});


export default router;