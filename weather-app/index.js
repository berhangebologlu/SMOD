const express = require('express')
const path = require("path");
const router = require("./routers/get-forecast");
const { Console } = require('console');
// const exp = require('constants');
const http_port = process.env.HTTP_PORT || 8005
const bodyParser = require('body-parser');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.json());

require("dotenv").config();

app.get("/", function(req, res) {
  res.sendFile('./view/index.html', {root:__dirname});
});

app.use("/api/forecast", router);

app.listen(http_port, () => {
  console.log(`App is running on port ${http_port}`);
});

