const dotenv = require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// set up express app
const app = express();

const port = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());

//dotenv.config();
mongoose.Promise = global.Promise;

// connect to mongodb
mongoose.connect(
  String(process.env.DB_connect),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => {
    console.log("Connect to database");
  }
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// simple UI
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
// initialize routes
app.use("/api/user", require("./routes/user"));
app.use("/api/post", require("./routes/post"));
