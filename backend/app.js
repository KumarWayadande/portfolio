import bodyParser from 'body-parser';
import express from 'express';
import articlesRouter from "./routes/article.js";
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    next();
  });

app.use("/articles", articlesRouter);
app.get("/", (req, res) => {
    console.log("Backend Connected");
    res.send("<h2>Backend Connected </h2>")
})

app.use((error, req, res) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong!!!";
  res.status(status).json({message : message});
})

app.listen(PORT, () => {console.log("Server started on port number 3000");});
