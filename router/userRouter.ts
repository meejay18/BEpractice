import { signIn, createNewuser } from "../controller/UserController";
import { Router } from "express";

const router: any = Router();

router.route("/sign-in").post(signIn);
router.route("/create-new-user").post(createNewuser);

export default router;
