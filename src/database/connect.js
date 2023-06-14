import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
//require chalk module to give colors to console text

//require database URL from properties file
const DB_URL = `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}@atlascluster.kowuocj.mongodb.net/?retryWrites=true&w=majority`;

//export this function and imported by server.js
export const connectMongoDB = () => {
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
  });

  mongoose.connection.on("connected", function () {
    console.log("Mongoose default connection is open to MongoDB Atlas");
  });

  mongoose.connection.on("error", function (err) {
    console.log("Mongoose default connection has occured " + err + " error");
  });

  mongoose.connection.on("disconnected", function () {
    console.log("Mongoose default connection is disconnected");
  });
};
