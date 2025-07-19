const express = require("express");
const router = express.Router();

const { CreateCourse, getCourses } = require("../controller/courser");

router.get("/courses", getCourses);

router.post("/courses", CreateCourse);

module.exports = router;
