import { model, Schema, Types } from "mongoose";

interface iTask {
  title: string;
  status: string;
  taskID: string;
  dueDate: Date;

  TodoList: Array<{}>;
}

interface iTaskData extends iTask, Document {}

const taskModel = new Schema<iTaskData>(
  {
    title: {
      type: String,
    },
    status: {
      type: String,
    },
    taskID: {
      type: String,
    },
    dueDate: {
      type: Date,
    },

    TodoList: [
      {
        type: Types.ObjectId,
        ref: "Todolist",
      },
    ],
  },
  { timestamps: true }
);

export default model<iTaskData>("tasks", taskModel);
