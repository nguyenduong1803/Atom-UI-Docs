import * as answerController from "../../controllers/answer.controller";
import express from "express";
const adminAnswerRoute = express.Router();

adminAnswerRoute.post("/create", answerController.create);
adminAnswerRoute.put("/update/:id", answerController.update);
adminAnswerRoute.delete("/remove:id", answerController.remove);

export default adminAnswerRoute;
