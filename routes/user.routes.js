import { Router } from "express";
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    removeUser
} from "../controllers/index.contriller.js"

export const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", removeUser);

