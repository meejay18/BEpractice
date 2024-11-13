import taskModel from "../model/taskModel";
import { Request, Response } from "express";

export const addNewtask = async (req: Request, res: Response) => {
  try {
    const { title, taskID, status, dueDate } = req.body;

    const task = await taskModel.create({
      title,
      taskID,
      status,
      dueDate,
    });
    return res.status(201).json({
      message: "new Task added",
      data: task,
      status: 201,
    });
  } catch (Error) {
    return res.status(404).json({
      message: "Error creating",
    });
  }
};

export const getAlltasks = async (req: Request, res: Response) => {
  try {
    const all = await taskModel.find();

    return res.status(201).json({
      message: "Tasks found",
      data: all,
      status: 201,
    });
  } catch (Error) {
    return Error;
  }
};
