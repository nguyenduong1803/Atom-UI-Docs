import express from "express";
import {
  login,
  register,
  authorization,
  getAll,
} from "../../controllers/users.controller";
import verifyToken from "../../middlewares/authenticateToken";
import checkAuth from "../../middlewares/checkAuth";
import checkGoogle from "../../middlewares/checkGoogle";
const authRoute = express.Router();

authRoute.get("", getAll);
authRoute.post("/register", register);
authRoute.post("/login", checkAuth, login);
authRoute.post("/google", checkGoogle, login);
authRoute.get("/verify-token", verifyToken, authorization);

export default authRoute;
