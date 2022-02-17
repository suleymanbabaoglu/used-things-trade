const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const express = require("express");
const VehicleTypeController = require("../controllers/VehicleTypeController");
const router = express.Router();

router.route("/").get(authenticate, VehicleTypeController.index);
router.route("/").post(authenticate, VehicleTypeController.create);
router.route("/:id").patch(idChecker, authenticate, VehicleTypeController.update);
router.route("/:id").delete(idChecker, authenticate, VehicleTypeController.delete);
module.exports = router;
