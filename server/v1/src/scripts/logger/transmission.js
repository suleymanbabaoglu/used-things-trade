const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "transmission-service" },
  transports: [
    new winston.transports.File({
      filename: "v1/src/logs/transmission/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/transmission/info.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/transmission/combined.log",
    }),

    //new winston.transports.Console()
  ],
});

module.exports = logger;
