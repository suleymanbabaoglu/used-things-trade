const CryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken");
const passwordToHash = (password) => {
  return CryptoJS.HmacSHA256(password, CryptoJS.HmacSHA1(password, process.env.PASSWORD_HASH).toString()).toString();
};

const generateAccessToken = (user) => {
  return JWT.sign({ name: user.full_name, ...user }, process.env.ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: "1w",
  });
};

const generateRefreshToken = (user) => {
  return JWT.sign({ name: user.full_name, ...user }, process.env.REFRESH_TOKEN_SECRET_KEY);
};

const getDateString = (date, getHours = false) => {
  if (getHours)
    return new Date(date).toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  return new Date(date).toLocaleDateString("de-DE",{
    day:"2-digit",
    month:"2-digit",
    year:"numeric"
  });
};

module.exports = {
  passwordToHash,
  generateAccessToken,
  generateRefreshToken,
  getDateString
};
