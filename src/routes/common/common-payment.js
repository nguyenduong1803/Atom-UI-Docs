import * as paymentController from "../../controllers/payment.controller";
import express from "express";
const commonPaymentRoute = express.Router();

commonPaymentRoute.post("/", paymentController.createPayment);

export default commonPaymentRoute;
