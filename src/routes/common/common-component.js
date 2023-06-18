import * as componentController from "../../controllers/component.controller";
import express from "express";
const commonComponentRoute = express.Router();

commonComponentRoute.get("/path", componentController.findByPath);
commonComponentRoute.get("/:id", componentController.findById);
commonComponentRoute.get("/", componentController.read);

export default commonComponentRoute;
