import express from "express";
import { login, logout } from "../controller/auth.js";
import { checkAuthMiddleware } from "../util/auth.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const data = await login(req, res);
    res.status(200).json(data);
  } catch (error) {
    throw new Error(error);
  }
});
router.post("/logout", logout);

router.use(checkAuthMiddleware);

router.post("/authcheck", (req, res) => {
  res.json("Done");
});

export default router;
