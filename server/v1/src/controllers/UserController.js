const BaseController = require("./BaseController");
const UserService = require("../services/UserService");
const ProjectService = require("../services/CountryService");
const httpStatus = require("http-status");
const { passwordToHash, generateAccessToken, generateRefreshToken,getDateString } = require("../scripts/utils/helper");
const uuid = require("uuid");
const eventEmitter = require("../scripts/events/eventEmitter");
const path = require("path");

class UserController extends BaseController {
  constructor() {
    super(UserService);
  }
  index(req, res) {
    UserService.list()
      .then((response) => {
        response.forEach((obj) => {
          obj.Password = undefined;
          obj.BirthDate = getDateString(obj.BirthDate);
        });
        return res.status(httpStatus.OK).send(response);
      })
      .catch((err) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err));
  }
  resetPassword(req, res) {
    const new_password = uuid.v4()?.split("-")[0] || `usr-${new Date().getTime()}`;
    UserService.updateWhere({ email: req.body.email }, { password: passwordToHash(new_password) })
      .then((updatedUser) => {
        if (!updatedUser) res.status(httpStatus.NOT_FOUND).send({ error: "Böyle Bir Kullanıcı Bulunamadı" });
        eventEmitter.emit("send_email", {
          to: updatedUser.email,
          subject: "Şifre Sıfırlama",
          html: `Talebiniz üzerine şifre sıfırlama işleminiz gerçekleşmiştir. Giriş yaptıktan sonra şifrenizi değiştirmeyi unutmayınız. <br/> Yeni Şifreniz : ${new_password}`,
        });
      })
      .catch(() => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: "Şifre Sıfırlama Esnasında Hata Oluştu" });
      });
  }

  changePassword(req, res) {
    req.body.password = passwordToHash(req.body.password);
    UserService.update(req.user?._id, req.body)
      .then((updatedUser) => res.status(httpStatus.OK).send(updatedUser))
      .catch((err) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: "Güncelleme sırasında bir hata oluştu." }));
  }

  login(req, res) {
    req.body.password = passwordToHash(req.body.password);
    UserService.findOne(req.body)
      .then((user) => {
        if (!user) return res.status(httpStatus.NOT_FOUND).send({ message: "Böyle Bir Kullanıcı Bulunamadı." });
        user = {
          ...user.toObject(),
          tokens: {
            access_token: generateAccessToken(user),
            refresh_token: generateRefreshToken(user),
          },
        };
        delete user.password;
        res.status(httpStatus.OK).send(user);
      })
      .catch((err) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err));
  }

  logout(req, res) {
    UserService.findOne(req.body)
      .then((user) => {
        if (!user) return res.status(httpStatus.NOT_FOUND).send({ message: "Böyle Bir Kullanıcı Bulunamadı." });
        user = {
          ...user.toObject(),
          tokens: {
            access_token: "",
            refresh_token: "",
          },
        };
        res.status(httpStatus.OK).send({ message: "logout success" });
      })
      .catch((err) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err));
  }

  projectList(req, res) {
    ProjectService.list({ user_id: req.user?._id })
      .then((projects) => {
        res.status(httpStatus.OK).send(projects);
      })
      .catch(() => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: "Projeler Getirilirken Beklenmedik Bir Hata Oluştu." }));
  }

  updateProfileImage(req, res) {
    if (!req?.files?.profile_image) return res.status(httpStatus.BAD_REQUEST).send({ err: "Bu İşlemi Yapmak için dosya bulunamadı" });

    const extension = path.extname(req.files.profile_image.name);
    const fileName = `${req.user?._id}${extension}`;
    const folderPath = path.join(__dirname, "../", "uploads/users", fileName);

    req.files.profile_image.mv(folderPath, (error) => {
      if (error) return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: error });
    });

    UserService.update(req.user._id, { profile_image: fileName })
      .then((updatedUser) => res.status(httpStatus.OK).send({ message: "Profil Resmi Güncellendi" }))
      .catch(() => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: "Profil Resmi Yüklerken Bir Sorun Oluştu." }));
  }
}

module.exports = new UserController();
