const router = require("express").Router();

const WorkoutController = require("../controllers/WorkoutController");

router
  .route("/workout/register")
  .post((req, res) => WorkoutController.create(req, res));

router
  .route("/delete_workout")
  .put((req, res) => WorkoutController.delete(req, res));

router
  .route("/workout")
  .put((req, res) => WorkoutController.update(req, res));

router
  .route("/workout/addexercise")
  .put((req, res) => WorkoutController.addExercise(req, res))

module.exports = router;
