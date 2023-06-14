import * as classListController from "../../controllers/classList.controller";
import express from "express";
const commonClassListRoute = express.Router();

commonClassListRoute.get("/", classListController.read);
commonClassListRoute.get("/:id", classListController.findById);

export default commonClassListRoute;
