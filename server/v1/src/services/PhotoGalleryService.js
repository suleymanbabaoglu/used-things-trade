const BaseService = require("./BaseService");
const PhotoGalleryModel = require("../models/PhotoGalleries");
class PhotoGalleryService extends BaseService {
  constructor() {
    super(PhotoGalleryModel);
  }
}
module.exports = new PhotoGalleryService();
