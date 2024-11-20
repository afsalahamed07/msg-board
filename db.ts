import Message from "types/Message";

const messages: Message[] = [
	{
		id: 1,
		text: "Hi there!",
		user: "Amando",
		added: new Date()
	},
	{
		id: 2,
		text: "Hello World!",
		user: "Charles",
		added: new Date()
	}
];

async function getAllMessages(): Promise<Message[]> {
	return messages;
}

async function addToMessages(message: Message): Promise<number> {
	return messages.push({ ...message, id: messages.length + 1 })
}

async function getMessageById(id: Number): Promise<Message | undefined> {
	return messages.find((message) => message.id === id);
}

const db = {
	getAllMessages,
	addToMessages,
	getMessageById
}

export default db;


