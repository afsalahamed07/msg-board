import { Router } from "express";
import { getMessages, getMessage } from "../controllers/indexController";

const indexRouter: Router = Router();

indexRouter.get("/", getMessages);
indexRouter.get("/messages/:id", getMessage);

export default indexRouter;
