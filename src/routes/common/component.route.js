import * as componentController from "../../controllers/component.controller";
import express from "express";
const componentRoute = express.Router();

componentRoute.post("/create", componentController.create);
componentRoute.put("/update/:id", componentController.update);
componentRoute.get("/path/:path", componentController.findByPath);
componentRoute.get("/:id", componentController.findById);
componentRoute.get("/:id", componentController.remove);

export default componentRoute;
