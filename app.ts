import express, { NextFunction, Request, Response } from "express";
import path, { dirname } from "path";

import * as dotenv from 'dotenv';
import { fileURLToPath } from "url";
import indexRouter from "./routes/indexRouter";
import newRouter from "./routes/newRouter";
dotenv.config()

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// TODO: extract eroro handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.log(err);
	res.status(500).send(err)
});

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter)
app.use("/new", newRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`First Express app - listnening on port ${PORT}`)
})

