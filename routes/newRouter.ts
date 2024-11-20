import { Router } from "express";
import { processNewMessage, sendForm } from "../controllers/newController";

const newRouter: Router = Router();

newRouter.get("/", sendForm);
newRouter.post("/", processNewMessage);

export default newRouter;
