const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("owner route set up");
});
module.exports = router;
