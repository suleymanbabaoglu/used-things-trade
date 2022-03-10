const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const express = require("express");
const CountryController = require("../controllers/CountryController");
const router = express.Router();

router.route("/").get(authenticate, CountryController.index.bind(CountryController));
router.route("/").post(authenticate, CountryController.create.bind(CountryController));
router.route("/:id").patch(idChecker, authenticate, CountryController.update.bind(CountryController));
router.route("/:id").delete(idChecker, authenticate, CountryController.delete.bind(CountryController));
module.exports = router;
