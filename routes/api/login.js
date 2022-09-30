const express = require("express");
const router = express.Router();
const {
  postLogin
} = require("../../controller/authController");
const { validateBody } = require("../../middleware/validator");

router.post("/", validateBody(), postLogin);

module.exports = router;