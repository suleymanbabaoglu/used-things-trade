const httpStatus = require("http-status");
const ApiError = require("../errors/ApiError");
class BaseController {
  constructor(service) {
    this.BaseService = service;
  }
  index(req, res) {
    this.BaseService?.list()
      .then((response) => res.status(httpStatus.OK).send(response))
      .catch((err) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err));
  }
  create(req, res) {
    req.body.user_id = req.user;
    this.BaseService?.create(req.body)
      .then((created) => res.status(httpStatus.CREATED).send(created))
      .catch((err) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err));
  }

  //! Burada Error Handling yapıldı
  update(req, res, next) {
    if (!req.params?.id)
      return next(new ApiError("ID Bilgisi Gereklidir", 400));
    this.BaseService?.update(req.params.id, req.body)
      .then((updated) => {
        if (!updated)
          return next(new ApiError("Böyle Bir Kayıt Bulunmamaktadır.", 404));
        res.status(httpStatus.OK).send(updated);
      })
      .catch((e) => next(new ApiError(e?.message)));
  }
  delete(req, res) {
    this.BaseService?.delete(req.params?.id)
      .then((deleted) => {
        if (!deleted)
          return res.status(httpStatus.NOT_FOUND).send({ error: "Bulunamadı" });
        res.status(httpStatus.OK).send({ message: "Silinmiştir." });
      })
      .catch((err) => {
        return res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "Silinirken bir hata oluştu." });
      });
  }
}
module.exports = BaseController;
