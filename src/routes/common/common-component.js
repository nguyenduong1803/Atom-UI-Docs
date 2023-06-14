import * as componentController from "../../controllers/component.controller";
import express from "express";
const commonComponentRoute = express.Router();

commonComponentRoute.get("/path/:path", componentController.findByPath);
commonComponentRoute.get("/:id", componentController.findById);

export default commonComponentRoute;
