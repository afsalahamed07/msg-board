import { Router } from "express";
import { processNewMessage, sendForm } from "../controllers/newController.js";

const newRouter: Router = Router();

newRouter.get("/", sendForm);
newRouter.post("/", processNewMessage);

export default newRouter;
