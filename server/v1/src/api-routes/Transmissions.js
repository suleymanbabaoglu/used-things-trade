const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const express = require("express");
const TransmissionController = require("../controllers/TransmissionController");
const router = express.Router();

router.route("/").get(authenticate, TransmissionController.index.bind(TransmissionController));
router.route("/").post(authenticate, TransmissionController.create.bind(TransmissionController));
router.route("/:id").patch(idChecker, authenticate, TransmissionController.update.bind(TransmissionController));
router.route("/:id").delete(idChecker, authenticate, TransmissionController.delete.bind(TransmissionController));
module.exports = router;
