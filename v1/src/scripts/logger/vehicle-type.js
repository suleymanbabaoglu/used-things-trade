const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "vehicle-type-service" },
  transports: [
    new winston.transports.File({
      filename: "v1/src/logs/vehicle-type/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/vehicle-type/info.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/vehicle-type/combined.log",
    }),

    //new winston.transports.Console()
  ],
});

module.exports = logger;
