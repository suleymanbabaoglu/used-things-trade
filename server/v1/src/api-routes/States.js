const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const express = require("express");
const StateController = require("../controllers/StateController");
const router = express.Router();

router.route("/").get(authenticate, StateController.index.bind(StateController));
router.route("/").post(authenticate, StateController.create.bind(StateController));
router.route("/:id").patch(idChecker, authenticate, StateController.update.bind(StateController));
router.route("/:id").delete(idChecker, authenticate, StateController.delete.bind(StateController));
module.exports = router;
