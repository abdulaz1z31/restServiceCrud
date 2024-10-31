import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {userRouter, taskRouter} from "./routes/index.routes.js"

dotenv.config();
const app = express();

const port = process.env.PORT;
const db_url = process.env.DATABASE_URI
console.log(port, db_url);

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);


app.listen(port, async () => {
  try {
    await mongoose.connect(db_url)
    console.log("Connecting to DB")
    console.log("Project is running on port:" + port);
  } catch (err) {
    console.log(err);
  }
});
