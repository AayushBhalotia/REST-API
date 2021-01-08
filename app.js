const express = require("express");
const app = express();
require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");

//middlewares
app.use(bodyParser.json());
app.use(cors());

//import routes
const userRoute = require("./routes/user");
app.use("/user", userRoute);

//listen on port
const port = process.env.PORT || 8001;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});
