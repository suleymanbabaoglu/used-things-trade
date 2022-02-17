const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const express = require("express");
const TransmissionController = require("../controllers/TransmissionController");
const router = express.Router();

router.route("/").get(authenticate, TransmissionController.index);
router.route("/").post(authenticate, TransmissionController.create);
router.route("/:id").patch(idChecker, authenticate, TransmissionController.update);
router.route("/:id").delete(idChecker, authenticate, TransmissionController.delete);
module.exports = router;
