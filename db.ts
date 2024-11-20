import Message from "types/Message";

const messages: Message[] = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date()
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date()
	}
];

async function getAllMessages(): Promise<Message[]> {
	return messages;
}

const db = {
	getAllMessages
}

export default db;


