const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "advert-service" },
  transports: [
    new winston.transports.File({
      filename: "v1/src/logs/advert/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/advert/info.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/advert/combined.log",
    }),

    //new winston.transports.Console()
  ],
});

module.exports = logger;
