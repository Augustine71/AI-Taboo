const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const categoryRouter = require("./routes/categoryRoute");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

const uri = process.env.MONGOURI;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(uri, connectionParams)
  .then(() => {
    app.listen(PORT, function () {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

app.use("/category", categoryRouter);
