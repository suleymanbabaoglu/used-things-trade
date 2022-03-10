const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const express = require("express");
const FuelController = require("../controllers/FuelController");
const router = express.Router();

router.route("/").get(authenticate, FuelController.index.bind(FuelController));
router.route("/").post(authenticate, FuelController.create.bind(FuelController));
router.route("/:id").patch(idChecker, authenticate, FuelController.update.bind(FuelController));
router.route("/:id").delete(idChecker, authenticate, FuelController.delete.bind(FuelController));
module.exports = router;
