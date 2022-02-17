const validate = require("../middlewares/validate");
const authenticate = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const schemas = require("../validations/Users");
const express = require("express");

const UserController = require("../controllers/UserController");
const router = express.Router();

// TODO: Bu kısımda BaseController için bind işlemi mevcut. Bu olmazsa controller çalışmıyor
router.get("/", UserController.index.bind(UserController));
router.route("/").post(validate(schemas.createValidation), UserController.create);
router.route("/").patch(authenticate, validate(schemas.updateValidation), UserController.update);
router.route("/login").post(validate(schemas.loginValidation), UserController.login);
router.route("/projects").get(authenticate, UserController.projectList);
router.route("/reset-password").post(validate(schemas.resetPasswordValidation), UserController.resetPassword);
router.route("/change-password").post(authenticate, validate(schemas.changePasswordValidation), UserController.changePassword);
router.route("/update-profile-image").post(authenticate, UserController.updateProfileImage);
router.route("/:id").delete(idChecker, authenticate, UserController.delete);

module.exports = router;
