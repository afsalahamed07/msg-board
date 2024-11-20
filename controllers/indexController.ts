import { Request, Response } from "express";
import db from "../db.js";
import Message from "../types/Message.js";

async function getMessages(req: Request, res: Response) {
	const messages: Message[] = await db.getAllMessages();

	console.log(messages);

	res.render("index", { messages: messages })
}

export { getMessages };
