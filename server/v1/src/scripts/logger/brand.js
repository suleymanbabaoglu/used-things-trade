const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "brand-service" },
  transports: [
    new winston.transports.File({
      filename: "v1/src/logs/brand/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/brand/info.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/brand/combined.log",
    }),

    //new winston.transports.Console()
  ],
});

module.exports = logger;
