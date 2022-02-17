const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const express = require("express");
const CountryController = require("../controllers/CountryController");
const router = express.Router();

router.route("/").get(authenticate, CountryController.index);
router.route("/").post(authenticate, CountryController.create);
router.route("/:id").patch(idChecker, authenticate, CountryController.update);
router.route("/:id").delete(idChecker, authenticate, CountryController.delete);
module.exports = router;
