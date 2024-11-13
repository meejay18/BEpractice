import { addNewtask, getAlltasks } from "../controller/ListController";
import { Router } from "express";

const router: any = Router();

router.route("/add-new-task").post(addNewtask);
router.route("/get-all-tasks").get(getAlltasks);

export default router;
