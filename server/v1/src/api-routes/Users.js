const validate = require("../middlewares/validate");
const authenticate = require("../middlewares/authenticate");

const schemas = require("../validations/Users");
const express = require("express");

const UserController = require("../controllers/UserController");
const router = express.Router();

// TODO: Bu kısımda BaseController için bind işlemi mevcut. Bu olmazsa controller çalışmıyor
router.get("/", authenticate,UserController.index.bind(UserController));
router.route("/").post(authenticate,validate(schemas.createValidation), UserController.create.bind(UserController));
router.route("/").patch(authenticate, validate(schemas.updateValidation), UserController.update.bind(UserController));
router.route("/login").post(validate(schemas.loginValidation), UserController.login.bind(UserController));
router.route("/logout").post(authenticate,UserController.logout.bind(UserController));
router.route("/projects").get(authenticate, UserController.projectList.bind(UserController));
router.route("/reset-password").post(validate(schemas.resetPasswordValidation), UserController.resetPassword.bind(UserController));
router.route("/change-password").post(authenticate, validate(schemas.changePasswordValidation), UserController.changePassword.bind(UserController));
router.route("/update-profile-image").post(authenticate, UserController.updateProfileImage.bind(UserController));
router.route("/:id").delete(authenticate, UserController.delete.bind(UserController));
router.route("/:id").get(authenticate, UserController.findOne.bind(UserController));

module.exports = router;
