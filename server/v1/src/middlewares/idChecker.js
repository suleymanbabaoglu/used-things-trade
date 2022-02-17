const httpStatus = require("http-status");
const ApiError = require("../errors/ApiError");

const idChecker = () => (req, res, next) => {
  if (!req?.params?.id?.match(/^[0-9a-fA-F]{24}$/))
    return next(
      new ApiError(
        "Must Enter Valid ID",
        httpStatus.BAD_REQUEST
      )
    );
};

module.exports = idChecker;
