const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();
const mongoose = require("mongoose");

//db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected"));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

//bring routes
const postRoutes = require("./routes/post");

//middleware
app.use(morgan());
app.use(bodyParser.json());
app.use("/", postRoutes);
app.listen(process.env.PORT || 3000, () => {
  console.log("Server Running @ PORT: 3000");
});
