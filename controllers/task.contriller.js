import { Task } from "../models/task.model.js";

export async function getAllTasks(req, res, next) {
  try {
    const tasks = await Task.find(); 
    res.status(200).send({
      status: "Success",
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
}

export async function getTaskById(req, res, next) {
  try {
    const task = await Task.findById(req.params.id); 
    if (!task) {
      return res.status(404).send({ status: "Task not found" });
    }
    res.status(200).send({
      status: "Success",
      data: task,
    });
  } catch (error) {
    next(error);
  }
}

export async function createTask(req, res, next) {
  try {
    const newTask = new Task(req.body); 
    await newTask.save();
    res.status(201).send({
      status: "Success",
      data: newTask,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateTask(req, res, next) {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedTask) {
      return res.status(404).send({ status: "Task not found" });
    }
    res.status(200).send({
      status: "Updated",
      data: updatedTask,
    });
  } catch (error) {
    next(error);
  }
}

export async function removeTask(req, res, next) {
  try {
    const deleteData = await Task.findByIdAndDelete(req.params.id); 
    if (!deleteData) {
      return res.status(404).send({ status: "Task not found" });
    }
    res.status(200).send({
      status: "Deleted",
      id: deleteData._id,
    });
  } catch (error) {
    next(error);
  }
}
