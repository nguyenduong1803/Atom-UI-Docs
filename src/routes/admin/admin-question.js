import * as questionController from "../../controllers/question.controller";
import express from "express";
const adminQuestionRoute = express.Router();

adminQuestionRoute.post("/create", questionController.create);
adminQuestionRoute.put("/update/:id", questionController.update);
adminQuestionRoute.delete("/remove:id", questionController.remove);

export default adminQuestionRoute;
