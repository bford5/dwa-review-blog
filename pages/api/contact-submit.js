import { MongoClient } from "mongodb";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const { contactName, contactEmail, newsletterOptIn } = req.body;

		// simple validation check
		if (
			!contactEmail ||
			!contactEmail.includes("@") ||
			!contactName ||
			contactName.trim() === ""
		) {
			res.status(422).json({ message: "invalid request input" });
			return;
		}

		// if Success make the below object
		const newContact = {
			contactName,
			contactEmail,
			newsletterOptIn,
		};
		// and store in a DB
		// MongoClient.connect(`mongodb+srv://${process.en}:<password>@project-dwablogalpha.5at4d29.mongodb.net/?retryWrites=true&w=majority`)
		const client = await MongoClient.connect(
			`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@project-dwablogalpha.5at4d29.mongodb.net/contactsubmissions?retryWrites=true&w=majority`
		);

		const db = client.db();
		await db.collection("inquiries").insertOne(newContact);
		client.close();
		// X
		// console.log(newContact);
		res.status(201).json({ message: "submission successful" });
	}
}
