const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const express = require("express");
const ColorController = require("../controllers/ColorController");
const router = express.Router();

router.route("/").get(authenticate, ColorController.index.bind(ColorController));
router.route("/").post(authenticate, ColorController.create.bind(ColorController));
router.route("/:id").patch(idChecker, authenticate, ColorController.update.bind(ColorController));
router.route("/:id").delete(idChecker, authenticate, ColorController.delete.bind(ColorController));
module.exports = router;
