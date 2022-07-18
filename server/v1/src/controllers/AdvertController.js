const BaseController = require("./BaseController");
const AdvertService = require("../services/AdvertService");
const PhotoGalleryService = require("../services/PhotoGalleryService");

class AdvertController extends BaseController {
  constructor() {
    super(AdvertService);
  }
  photoUpload() {
    PhotoGalleryService.create("");
  }
}

module.exports = new AdvertController();
