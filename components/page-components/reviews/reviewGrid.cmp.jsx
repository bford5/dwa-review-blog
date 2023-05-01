import ReviewCard from "../reviews/reviewCard.cmp";

export default function ReviewGrid({ data }) {
	return (
		<div className='reviewGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-6'>
			{data.map((review) => (
				<ReviewCard key={review.reviewId} review={review} />
			))}
		</div>
	);
}
