import { Router } from "express";
import {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    removeTask
} from "../controllers/index.contriller.js"
export const taskRouter = Router();

taskRouter.get("/", getAllTasks);
taskRouter.get("/:id", getTaskById);
taskRouter.post("/", createTask);
taskRouter.put("/:id", updateTask);
taskRouter.delete("/:id", removeTask);
