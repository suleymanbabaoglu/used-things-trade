const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const express = require("express");
const CityController = require("../controllers/CityController");
const router = express.Router();

router.route("/").get(authenticate, CityController.index);
router.route("/").post(authenticate, CityController.create);
router.route("/:id").patch(idChecker, authenticate, CityController.update);
router.route("/:id").delete(idChecker, authenticate, CityController.delete);
module.exports = router;
