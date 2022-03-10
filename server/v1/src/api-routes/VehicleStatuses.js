const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const express = require("express");
const VehicleStatusController = require("../controllers/VehicleStatusController");
const router = express.Router();

router.route("/").get(authenticate, VehicleStatusController.index.bind(VehicleStatusController));
router.route("/").post(authenticate, VehicleStatusController.create.bind(VehicleStatusController));
router.route("/:id").patch(idChecker, authenticate, VehicleStatusController.update.bind(VehicleStatusController));
router.route("/:id").delete(idChecker, authenticate, VehicleStatusController.delete.bind(VehicleStatusController));
module.exports = router;
