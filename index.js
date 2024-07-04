

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());

const blog = require("./routes/blog");
const { connect } = require("mongoose");
//mount
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT, () => {
    console.log(`App is running successfully at Port no ${PORT}`);
})

app.get("/", (req, res) => {
    res.send(`<h1>This is my Home Page.</h1>`)
})