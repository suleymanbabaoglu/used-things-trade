const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "city-service" },
  transports: [
    new winston.transports.File({
      filename: "v1/src/logs/city/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/city/info.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/city/combined.log",
    }),

    //new winston.transports.Console()
  ],
});

module.exports = logger;
