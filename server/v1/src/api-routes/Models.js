const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const express = require("express");
const ModelController = require("../controllers/ModelController");
const router = express.Router();

router.route("/").get(authenticate, ModelController.index.bind(ModelController));
router.route("/").post(authenticate, ModelController.create.bind(ModelController));
router.route("/:id").get(authenticate, ModelController.findOne.bind(ModelController));
router.route("/:id").patch(authenticate, ModelController.update.bind(ModelController));
router.route("/:id").delete(authenticate, ModelController.delete.bind(ModelController));
module.exports = router;
