const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");
const helmet = require("helmet");
const config = require("./config");
const loaders = require("./loaders");
const events = require("./scripts/events");
const errorHandler = require("./middlewares/errorHandler");
const {
  BrandRoutes,
  CityRoutes,
  ColorRoutes,
  CountryRoutes,
  FuelRoutes,
  ModelRoutes,
  StateRoutes,
  TransmissionRoutes,
  VehicleStatusRoutes,
  VehicleTypeRoutes,
  UserRoutes,
  AdvertRoutes,
} = require("./api-routes");

config();
loaders();
events();

const app = express();
app.use("/uploads", express.static(path.join(__dirname, "./", "uploads"))); // Statik dosya paylaşımı
app.use(express.json());
app.use(helmet()); // Güvenlik
app.use(fileUpload());
app.use(cors());

app.listen(process.env.APP_PORT, () => {
  app.use("/users", UserRoutes);
  app.use("/adverts", AdvertRoutes);
  app.use("/countries", CountryRoutes);
  app.use("/states", StateRoutes);
  app.use("/cities", CityRoutes);
  app.use("/colors", ColorRoutes);
  app.use("/brands", BrandRoutes);
  app.use("/models", ModelRoutes);
  app.use("/fuels", FuelRoutes);
  app.use("/transmissions", TransmissionRoutes);
  app.use("/vehicle-types", VehicleTypeRoutes);
  app.use("/vehicle-statuses", VehicleStatusRoutes);

  //! Not Found
  app.use((req, res, next) => {
    const error = new Error("Page Not Found");
    error.status = 404;
    next(error.message);
  });

  app.use(errorHandler);
});
