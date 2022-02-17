const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "photo-gallery-service" },
  transports: [
    new winston.transports.File({
      filename: "v1/src/logs/photo-gallery/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/photo-gallery/info.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/photo-gallery/combined.log",
    }),

    //new winston.transports.Console()
  ],
});

module.exports = logger;
