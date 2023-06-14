import * as questionController from "../../controllers/question.controller";
import express from "express";
const commonQuestionRoute = express.Router();

commonQuestionRoute.get("/:id", questionController.findById);
commonQuestionRoute.get("/", questionController.read);

export default commonQuestionRoute;
