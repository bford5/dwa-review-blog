import { MongoClient } from "mongodb";

// export async function getReviewData() {
// 	const client = await MongoClient.connect(
// 		`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@project-dwablogalpha.5at4d29.mongodb.net/reviewsblog?retryWrites=true&w=majority`
// 	);
// 	const db = client.db();
// 	const reviewDocuments = await db.collection("reviews").find().toArray();
// 	client.close();
// 	return reviewDocuments;
// }

export default async function handler(req, res) {
	// connect to mongoDB client
	const client = await MongoClient.connect(
		`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@project-dwablogalpha.5at4d29.mongodb.net/reviewsblog?retryWrites=true&w=majority`
	);

	if (req.method === "POST") {
		const {
			reviewLink,
			reviewTitle,
			reviewDescription,
			reviewContent,
			reviewIsFeatured,
		} = req.body;

		// simple validation check
		// a front-end validation check will be done with getServerSideProps/getStaticProps on reviewLink
		// this to prevent a user submitting a review link that already exists
		//
		if (
			!reviewLink ||
			reviewLink.trim() === "" ||
			!reviewTitle ||
			reviewTitle.trim() === "" ||
			!reviewDescription ||
			reviewDescription.trim() === "" ||
			!reviewContent ||
			reviewContent.trim() === ""
		) {
			res.status(422).json({ message: "invalid request input" });
			return;
		}

		// if Success make the below object
		const newReview = {
			reviewLink,
			reviewTitle,
			reviewDescription,
			reviewContent,
			reviewIsFeatured,
		};
		// and store in a DB
		const db = client.db();
		await db.collection("reviews").insertOne(newReview);
		// X
		client.close();
		res.status(201).json({ message: "submission successful" });
		//
	}

	if (req.method === "GET") {
		const db = client.db();
		const reviewDocuments = await db
			.collection("reviews")
			.find()
			// .sort({ reviewLink: 1 })
			.toArray();
		// using .find() will return all documents in the reviews collection
		// using .sort({ reviewLink: -1 }) orders the documents by reviewLink in descending order
		// using .toArray() will return the sorted documents as an array

		res.status(200).json({ reviews: reviewDocuments });
	}
	client.close();
}
