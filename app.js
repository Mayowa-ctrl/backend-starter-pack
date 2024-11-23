const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDb");

// initializing express
const app = express();

app.use(express.json()); // Body parser
dotenv.config({ path: ".env" });

connectDB();

const PORT = 5000;

const server = app.listen(PORT, console.log(`Server runing on ${PORT}`));
