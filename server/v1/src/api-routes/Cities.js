const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const express = require("express");
const CityController = require("../controllers/CityController");
const router = express.Router();

router.route("/").get(authenticate, CityController.index.bind(CityController));
router.route("/").post(authenticate, CityController.create.bind(CityController));
router.route("/:id").patch(idChecker, authenticate, CityController.update.bind(CityController));
router.route("/:id").delete(idChecker, authenticate, CityController.delete.bind(CityController));
module.exports = router;
