import express from "express";
import { connectDB } from "./config/database";

const app = express();
const port = 3000;

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
