const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "color-service" },
  transports: [
    new winston.transports.File({
      filename: "v1/src/logs/color/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/color/info.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "v1/src/logs/color/combined.log",
    }),

    //new winston.transports.Console()
  ],
});

module.exports = logger;
