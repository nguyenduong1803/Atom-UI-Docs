import * as componentDetailController from "../../controllers/componentDetail.controller";
import express from "express";
const adminComponentRoute = express.Router();

adminComponentRoute.post("/create", componentDetailController.create);
adminComponentRoute.put("/update/:id", componentDetailController.update);
adminComponentRoute.delete("/remove:id", componentDetailController.remove);

export default adminComponentRoute;
