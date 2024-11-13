import userModel from "../model/userModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
// import crypto from "crypto";

export const createNewuser = async (req: Request, res: Response) => {
  try {
    const { userName, email, password } = req.body;

    const salt = await bcrypt.genSalt(7);
    const hashed = bcrypt.hash(password, salt);

    const user = await userModel.create({
      userName,
      email,
      password: hashed,
    });

    return res.status(201).json({
      message: "user created successfully",
      data: user,
    });
  } catch (Error) {
    return Error;
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body();

    const user = await userModel.findOne({
      email,
    });

    if (user) {
      const pass = await bcrypt.compare(password, user?.password);
      if (pass) {
        return res.status(201).json({
          message: "Welcome back",
          data: user,
          status: 201,
        });
      } else {
        return res.status(404).json({
          message: "password Incorrect",
        });
      }
    } else {
      return res.status(404).json({
        message: "Email not found",
      });
    }
  } catch (Error) {
    return Error;
  }
};
