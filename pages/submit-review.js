import SubmitReviewForm from "../components/page-components/submitReview/SubmitReviewForm.cmp";

export default function SubmitReview({ reviews }) {
	console.log(reviews);

	return (
		<div>
			<h1>Contact Page</h1>
			<div>
				<SubmitReviewForm reviews={reviews} />
			</div>
			<div>
				{reviews.map((review) => (
					<p>{review.reviewLink}</p>
				))}
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch("http://localhost:3000/api/review");
	const reviews = await res.json();
	return {
		props: {
			reviews,
		},
		revalidate: 10,
	};
}
