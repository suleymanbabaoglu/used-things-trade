const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const express = require("express");
const BrandController = require("../controllers/BrandController");
const router = express.Router();

router.route("/:id").get(authenticate, BrandController.findOne.bind(BrandController));
router.route("/").get(authenticate, BrandController.index.bind(BrandController));
router.route("/").post(authenticate, BrandController.create.bind(BrandController));
router.route("/:id").patch(authenticate, BrandController.update.bind(BrandController));
router.route("/:id").delete(authenticate, BrandController.delete.bind(BrandController));
module.exports = router;
