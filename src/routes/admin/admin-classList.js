import * as classListController from "../../controllers/classList.controller";
import express from "express";
const adminClassListRoute = express.Router();

adminClassListRoute.post("/create", classListController.create);
adminClassListRoute.put("/update/:id", classListController.update);
adminClassListRoute.delete("/remove:id", classListController.remove);

export default adminClassListRoute;
