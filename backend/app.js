require("dotenv").config({ path: ".env" });
const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const connection = require('./config/config')
const customerRoutes = require("./routes/product");

// settings
const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs"); //  EJS
app.set("views", path.join(__dirname, "../frontend/views"));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev")); // see the query on the console

//DATABASE conection

//server routes
app.use("/", customerRoutes);

//Static
app.use(express.static(path.join(__dirname, "public")));

//server up
app.listen(PORT, async(req, res) => {
  console.log(`Server active on port: ${PORT}`);
 
});

module.exports = app;