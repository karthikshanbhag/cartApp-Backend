const express = require("express");
const connectDb = require("./db");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

connectDb();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/cart", require("./routes/cart"));

app.listen(port, () => {
  console.log(`cartApp listening at http://localhost:${port}`);
});
