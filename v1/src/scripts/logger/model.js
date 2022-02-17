const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "model-service" },
  transports: [
    new winston.transports.File({
      filename: "v1/src/logs/model/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/model/info.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/model/combined.log",
    }),

    //new winston.transports.Console()
  ],
});

module.exports = logger;
