import multer from "multer";
import bodyParser from "body-parser";
import express from "express";
import articleRoute from "./routes/article.js";

const app = express();
app.use(express.static('public')); 
app.use("/upload", express.static("public"));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use("/articles", articleRoute);


const storage = multer.diskStorage({
  destination:function (req, file, cb){
    cb(null, "./public/images")
  },
  filename:function (req, file, cb){
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  // console.log(file);
  res.status(200).json("http://localhost:3000/images/"+file.filename);
});

app.use((error, req, res) => {
  const message = error.message || "Something went wrong!!!";
  const status = error.status || 500;
  res.status(status).json({ message: message });
});

app.listen(3000);
