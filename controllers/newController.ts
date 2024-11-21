import { Request, Response } from "express";
import Message from "../types/Message.js";
import db from "../db.js";

function processNewMessage(req: Request, res: Response) {
	console.log("from con: ", req.body);

	const message: Message = {
		id: -1,
		text: req.body.message,
		user: req.body.author,
		added: new Date()
	}

	db.addToMessages(message);

	res.redirect("/");
}

function sendForm(req: Request, res: Response) {
	res.render("new")
}

export { processNewMessage, sendForm };
