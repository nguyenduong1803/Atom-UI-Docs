import * as componentController from "../../controllers/component.controller";
import express from "express";
const adminComponentRoute = express.Router();

adminComponentRoute.post("/create", componentController.create);
adminComponentRoute.put("/update/:id", componentController.update);
adminComponentRoute.delete("/remove/:id", componentController.remove);

export default adminComponentRoute;
