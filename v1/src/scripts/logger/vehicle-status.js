const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "vehicle-status-service" },
  transports: [
    new winston.transports.File({
      filename: "v1/src/logs/vehicle-status/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/vehicle-status/info.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/vehicle-status/combined.log",
    }),

    //new winston.transports.Console()
  ],
});

module.exports = logger;
