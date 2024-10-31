import {User} from "../models/index.model.js"

export async function getAllUsers(req, res, next) {
  try {
    const users = await User.find(); 
    res.status(200).send({
      status: "Success",
      data: users,
    });
  } catch (error) {
    next(error);
  }
}

export async function getUserById(req, res, next) {
  try {
    const user = await User.findById(req.params.id); 
    if (!user) {
      return res.status(404).send({ status: "User not found" });
    }
    res.status(200).send({
      status: "Success",
      data: user,
    });
  } catch (error) {
    next(error);
  }
}

export async function createUser(req, res, next) {
  try {
    const newUser = new User(req.body); 
    await newUser.save();
    res.status(201).send({
      status: "Success",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateUser(req, res, next) {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }); 
    if (!updatedUser) {
      return res.status(404).send({ status: "User not found" });
    }
    res.status(200).send({
      status: "Updated",
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
}

export async function removeUser(req, res, next) {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id); 
    if (!deletedUser) {
      return res.status(404).send({ status: "User not found" });
    }
    res.status(200).send({
      status: "Deleted",
      data: deletedUser,
    });
  } catch (error) {
    next(error);
  }
}
