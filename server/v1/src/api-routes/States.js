const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const express = require("express");
const StateController = require("../controllers/StateController");
const router = express.Router();

router.route("/").get(authenticate, StateController.index);
router.route("/").post(authenticate, StateController.create);
router.route("/:id").patch(idChecker, authenticate, StateController.update);
router.route("/:id").delete(idChecker, authenticate, StateController.delete);
module.exports = router;
