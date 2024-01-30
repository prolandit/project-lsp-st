const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

const port = 3002;
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Connected!')
});

app.listen(port, () => {
    console.log(`Api running on port : ${port}`);
})