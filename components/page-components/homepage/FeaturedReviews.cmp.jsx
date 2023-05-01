import ReviewGrid from "../reviews/reviewGrid.cmp";

export default function FeaturedReviews({ data }) {
	const featuredReviews = data.filter((review) => review.isFeatured != false);

	return (
		<div className='featuredReviews my-6'>
			<h2 className='pb-4 text-center text-2xl'>FEATURED REVIEWS</h2>
			<ReviewGrid data={featuredReviews} />
		</div>
	);
}
