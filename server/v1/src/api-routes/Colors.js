const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const express = require("express");
const ColorController = require("../controllers/ColorController");
const router = express.Router();

router.route("/").get(authenticate, ColorController.index);
router.route("/").post(authenticate, ColorController.create);
router.route("/:id").patch(idChecker, authenticate, ColorController.update);
router.route("/:id").delete(idChecker, authenticate, ColorController.delete);
module.exports = router;
