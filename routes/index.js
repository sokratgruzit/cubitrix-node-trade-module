const express = require("express");
const router = express();
const marketsController = require("../controllers/markets_controller");

router.get("/markets", marketsController.get_markets);

module.exports = router;
