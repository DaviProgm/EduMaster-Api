const express = require("express");
const router = express.Router();

const { CreateCourse } = require("../controller/courser");

router.post("/courses", CreateCourse);

module.exports = router;