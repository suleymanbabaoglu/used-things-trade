const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "fuel-service" },
  transports: [
    new winston.transports.File({
      filename: "v1/src/logs/fuel/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/fuel/info.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/fuel/combined.log",
    }),

    //new winston.transports.Console()
  ],
});

module.exports = logger;
