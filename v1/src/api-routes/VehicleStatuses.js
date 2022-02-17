const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const express = require("express");
const VehicleStatusController = require("../controllers/VehicleStatusController");
const router = express.Router();

router.route("/").get(authenticate, VehicleStatusController.index);
router.route("/").post(authenticate, VehicleStatusController.create);
router.route("/:id").patch(idChecker, authenticate, VehicleStatusController.update);
router.route("/:id").delete(idChecker, authenticate, VehicleStatusController.delete);
module.exports = router;
