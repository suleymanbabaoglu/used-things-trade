const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "state-service" },
  transports: [
    new winston.transports.File({
      filename: "v1/src/logs/state/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/state/info.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/state/combined.log",
    }),

    //new winston.transports.Console()
  ],
});

module.exports = logger;
