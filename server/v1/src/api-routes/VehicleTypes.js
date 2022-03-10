const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const express = require("express");
const VehicleTypeController = require("../controllers/VehicleTypeController");
const router = express.Router();

router.route("/").get(authenticate, VehicleTypeController.index.bind(VehicleTypeController));
router.route("/").post(authenticate, VehicleTypeController.create.bind(VehicleTypeController));
router.route("/:id").patch(idChecker, authenticate, VehicleTypeController.update.bind(VehicleTypeController));
router.route("/:id").delete(idChecker, authenticate, VehicleTypeController.delete.bind(VehicleTypeController));
module.exports = router;
