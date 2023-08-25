const express = require('express');
const path = require("path");
const router = express.Router();
const {getForeCast}  = require("../utils/weather");

const invalidRoutePath = path.join(__dirname, "../public/pages/405.html");

const notImplementedHandler = async (req, res) => {
    res.status(405).sendFile(invalidRoutePath);
  };

router.put("/", notImplementedHandler);
router.patch("/", notImplementedHandler);
router.delete("/", notImplementedHandler);
router.get("/", notImplementedHandler);

router.post('/', async (req, res) => {
debugger;
  let x; 
  let y;

  if (req.body.params.city == 'istanbul') {
    x = 'latitude=41.015137'
    y = 'longitude=28.979530'
  }
  if (req.body.params.city == 'izmir') {
    x = 'latitude=38.423733'
    y = 'longitude=27.142826'
  }
  if (req.body.params.city == 'ankara') {
    x = 'latitude=39.925533'
    y = 'longitude=32.866287'
  }
  if (req.body.params.city == 'antalya') {
    x = 'latitude=36.884804'
    y = 'longitude=30.704044'
  }

  try {
    let result = await getForeCast(x, y);
    res.status(200).json(result);
    debugger;
  } catch (err) {
    res.status(404).send(err);
  }
  console.log(req.params.city)
})
  module.exports = router;




