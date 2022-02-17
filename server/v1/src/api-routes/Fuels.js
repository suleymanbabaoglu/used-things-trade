const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const express = require("express");
const FuelController = require("../controllers/FuelController");
const router = express.Router();

router.route("/").get(authenticate, FuelController.index);
router.route("/").post(authenticate, FuelController.create);
router.route("/:id").patch(idChecker, authenticate, FuelController.update);
router.route("/:id").delete(idChecker, authenticate, FuelController.delete);
module.exports = router;
