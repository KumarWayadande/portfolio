import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.get("/", (req, res) => {
    console.log("Backend Connected");
    res.send("<h2>Backend Connected </h2>")
})

app.listen(3000);
