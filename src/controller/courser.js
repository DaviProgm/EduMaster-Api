const { courses } = require("../models");

async function getCourses(req, res) {
  try {
    const courses = await courses.findAll({
      order: ["id", "ASC"],
    });

    return res.send(courses);
  } catch (error) {
    return res.status(500).send({
      error: error.message,
    });
  }
}

async function CreateCourse(req, res) {
  try {
    const { title, description, duration, price, hours, studantes, rating } =
      req.body;
    const course = await courses.create({
      title,
      description,
      duration,
      price,
      hours,
      studantes,
      rating,
    });
    return res.status(201).json(course);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
module.exports = {
  CreateCourse,
  getCourses
};
