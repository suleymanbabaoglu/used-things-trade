const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const express = require("express");
const ModelController = require("../controllers/ModelController");
const router = express.Router();

router.route("/").get(authenticate, ModelController.index);
router.route("/").post(authenticate, ModelController.create);
router.route("/:id").patch(idChecker, authenticate, ModelController.update);
router.route("/:id").delete(idChecker, authenticate, ModelController.delete);
module.exports = router;
