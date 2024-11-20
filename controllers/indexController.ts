import { Request, Response } from "express";
import db from "../db.js";
import Message from "../types/Message.js";

async function getMessages(req: Request, res: Response) {
	const messages: Message[] = await db.getAllMessages();

	res.render("index", { messages: messages })
}

async function getMessage(req: Request, res: Response) {
	const id = req.params.id;
	const message: Message | undefined = await db.getMessageById(Number(id));

	res.render("message", { message: message })
}

export { getMessages, getMessage };
