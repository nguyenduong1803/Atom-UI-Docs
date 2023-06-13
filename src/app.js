import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import { connectMongoDB } from "./database/connect";
import routes from "./routes";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

app.use(cors());
connectMongoDB();
morgan("tiny");
app.use(
  cors({
    credentials: true,
    origin: [CLIENT_URL],
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
//
routes.forEach((item) =>
  item.routes.forEach((route) =>
    app.use("/api" + item.prefix + route.path, route.route)
  )
);

app.listen(PORT || 5000, () => {
  console.log(`[SUCCESS] ::: Server is listening on port: ${PORT}`);
});
