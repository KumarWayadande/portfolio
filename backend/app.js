import bodyParser from "body-parser";
import express from "express";
import articleRoute from "./routes/article.js";

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use("/articles", articleRoute);
app.use((error, req, res) => {
  const message = error.message || "Something went wrong!!!";
  const status = error.status || 500;
  res.status(status).json({ message: message });
});

app.listen(3000);
