import * as tradingController from "../../controllers/trading.controller";
import express from "express";
const commonQuestionRoute = express.Router();

commonQuestionRoute.post("/create", tradingController.createTrading);

export default commonQuestionRoute;
