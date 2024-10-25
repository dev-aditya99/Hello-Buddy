import express from "express"
import protectRoute from "../middlewares/protectRoutes.js";
import { getUserForSideBar } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", protectRoute, getUserForSideBar);

export default userRouter;