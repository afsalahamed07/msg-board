import { Router } from "express";
import { getMessages } from "../controllers/indexController";

const indexRouter: Router = Router();

indexRouter.get("/", getMessages);

export default indexRouter;
