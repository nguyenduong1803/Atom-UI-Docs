import * as componentDetailController from "../../controllers/componentDetail.controller";
import express from "express";
const adminComponentDetail = express.Router();

adminComponentDetail.post("/create", componentDetailController.create);
adminComponentDetail.put("/update/:id", componentDetailController.update);
adminComponentDetail.delete("/remove/:id", componentDetailController.remove);

export default adminComponentDetail;
