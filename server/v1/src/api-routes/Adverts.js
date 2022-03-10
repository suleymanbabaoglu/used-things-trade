const validate = require("../middlewares/validate");
const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const schemas = require("../validations/Adverts");
const express = require("express");
const AdvertController = require("../controllers/AdvertController");
const router = express.Router();

router.route("/").get(authenticate, AdvertController.index.bind(AdvertController));
router.route("/").post(authenticate, validate(schemas.createValidation), AdvertController.create.bind(AdvertController));
router.route("/:id").patch(idChecker, authenticate, validate(schemas.updateValidation), AdvertController.update.bind(AdvertController));
router.route("/:id").delete(idChecker, authenticate, AdvertController.delete.bind(AdvertController));

router.route("/:id/photo-upload").post(idChecker, authenticate, AdvertController.photoUpload.bind(AdvertController));
module.exports = router;
