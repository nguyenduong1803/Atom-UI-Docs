import * as answerController from "../../controllers/answer.controller";
import express from "express";
const commonAnswerRoute = express.Router();

commonAnswerRoute.get("/question-id/:id", answerController.findByQuestionId);
commonAnswerRoute.get("/:id", answerController.findById);
commonAnswerRoute.get("/", answerController.read);

export default commonAnswerRoute;
