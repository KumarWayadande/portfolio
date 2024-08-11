import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";
import express from "express";
import articleRoute from "./routes/article.js";
import authRoute from "./routes/auth.js";
const PORT = 3000;



// Express Server intialization
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


// Middleware to use public folder to display static files, images
app.use(express.static('public')); 
app.use("/upload", express.static("public"));

// Allow server to not block cross origin requests (CORS) 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  next();
});

app.use("/auth", authRoute);
app.use("/articles", articleRoute);


// Storage option to store article images 
// Later on these images are fetched for display
const storage = multer.diskStorage({
  destination:function (req, file, cb){
    cb(null, "./public/images")
  },
  filename:function (req, file, cb){
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({ storage });

// Route to upload images to the public folder of the server
app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json("http://localhost:3000/images/"+file.filename);
});



// Universal Exception handling mechanism
app.use((error, req, res) => {
  const message = error.message || "Something went wrong!!!";
  const status = error.status || 500;
  res.status(status).json({ message: message });
});


// Server started on specified port
app.listen(PORT);
