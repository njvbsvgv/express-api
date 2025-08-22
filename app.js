require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRouters = require("./router/product.router");

const app = express();

app.use(express.json());
app.use("/api", productRouters);

const port = process.env.PORT || 3000;
const mongoDbUrl = process.env.MONGO_URI

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(port);
  })
  .catch((error) => {
    console.log("error ==>", error);
  });