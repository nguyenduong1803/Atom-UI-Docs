import * as componentController from "../../controllers/componentDetail.controller";
import express from "express";
const commonComponentDetailRoute = express.Router();

commonComponentDetailRoute.get("/component-id/:id", componentController.findByComponentId);
commonComponentDetailRoute.get("/:id", componentController.findById);
commonComponentDetailRoute.get("/", componentController.read);

export default commonComponentDetailRoute;
