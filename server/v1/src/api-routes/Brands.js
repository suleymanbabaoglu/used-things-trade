const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const express = require("express");
const BrandController = require("../controllers/BrandController");
const router = express.Router();

router.route("/").get(authenticate, BrandController.index);
router.route("/").post(authenticate, BrandController.create);
router.route("/:id").patch(idChecker, authenticate, BrandController.update);
router.route("/:id").delete(idChecker, authenticate, BrandController.delete);
module.exports = router;
