import ReviewGrid from "../../components/page-components/reviews/reviewGrid.cmp";

export default function BlogReviewsHubPage(props) {
	const reviewsData = props.data;

	return (
		<div className='w-5/6 md:w-3/4 mx-auto'>
			<h1 className=' text-2xl underline pb-3 text-center pt-2'>
				Blog Reviews Hub Page
			</h1>
			<div className='mt-2'>
				<ReviewGrid data={reviewsData} />
			</div>
		</div>
	);
}

export async function getStaticProps(context) {
	return {
		props: {
			data: [
				{
					reviewTitle: "Review 1",
					reviewDescription:
						"Et proident exercitation officia aliquip duis duis dolore Lorem dolore qui ad.",
					reviewContent:
						"Mollit pariatur consectetur ex aute duis esse. Nostrud ea veniam anim fugiat exercitation amet. Et eiusmod consequat dolor deserunt quis in laboris. Tempor ut ex ex reprehenderit sint dolore qui duis exercitation veniam quis consectetur qui laboris. Anim amet consectetur ut ea qui pariatur ad aute Lorem ut nulla duis amet excepteur.",
					reviewId: "1",
					reviewLink: "review-1",
					isFeatured: "true",
				},
				{
					reviewTitle: "Review 2",
					reviewDescription:
						"Et proident exercitation officia aliquip duis duis dolore Lorem dolore qui ad.",
					reviewContent:
						"Mollit pariatur consectetur ex aute duis esse. Nostrud ea veniam anim fugiat exercitation amet. Et eiusmod consequat dolor deserunt quis in laboris. Tempor ut ex ex reprehenderit sint dolore qui duis exercitation veniam quis consectetur qui laboris. Anim amet consectetur ut ea qui pariatur ad aute Lorem ut nulla duis amet excepteur.",
					reviewId: "2",
					reviewLink: "review-2",
					isFeatured: true,
				},
				{
					reviewTitle: "Review 3",
					reviewDescription:
						"Et proident exercitation officia aliquip duis duis dolore Lorem dolore qui ad.",
					reviewContent:
						"Mollit pariatur consectetur ex aute duis esse. Nostrud ea veniam anim fugiat exercitation amet. Et eiusmod consequat dolor deserunt quis in laboris. Tempor ut ex ex reprehenderit sint dolore qui duis exercitation veniam quis consectetur qui laboris. Anim amet consectetur ut ea qui pariatur ad aute Lorem ut nulla duis amet excepteur.",
					reviewId: "3",
					reviewLink: "review-3",
					isFeatured: false,
				},
				{
					reviewTitle: "Review 4",
					reviewDescription:
						"Et proident exercitation officia aliquip duis duis dolore Lorem dolore qui ad.",
					reviewContent:
						"Mollit pariatur consectetur ex aute duis esse. Nostrud ea veniam anim fugiat exercitation amet. Et eiusmod consequat dolor deserunt quis in laboris. Tempor ut ex ex reprehenderit sint dolore qui duis exercitation veniam quis consectetur qui laboris. Anim amet consectetur ut ea qui pariatur ad aute Lorem ut nulla duis amet excepteur.",
					reviewId: "4",
					reviewLink: "review-4",
					isFeatured: true,
				},
				{
					reviewTitle: "Review 5",
					reviewDescription:
						"Et proident exercitation officia aliquip duis duis dolore Lorem dolore qui ad.",
					reviewContent:
						"Mollit pariatur consectetur ex aute duis esse. Nostrud ea veniam anim fugiat exercitation amet. Et eiusmod consequat dolor deserunt quis in laboris. Tempor ut ex ex reprehenderit sint dolore qui duis exercitation veniam quis consectetur qui laboris. Anim amet consectetur ut ea qui pariatur ad aute Lorem ut nulla duis amet excepteur.",
					reviewId: "5",
					reviewLink: "review-5",
					isFeatured: false,
				},
				{
					reviewTitle: "Review 6",
					reviewDescription:
						"Et proident exercitation officia aliquip duis duis dolore Lorem dolore qui ad.",
					reviewContent:
						"Mollit pariatur consectetur ex aute duis esse. Nostrud ea veniam anim fugiat exercitation amet. Et eiusmod consequat dolor deserunt quis in laboris. Tempor ut ex ex reprehenderit sint dolore qui duis exercitation veniam quis consectetur qui laboris. Anim amet consectetur ut ea qui pariatur ad aute Lorem ut nulla duis amet excepteur.",
					reviewId: "6",
					reviewLink: "review-6",
					isFeatured: true,
				},
				{
					reviewTitle: "Review 7",
					reviewDescription:
						"Et proident exercitation officia aliquip duis duis dolore Lorem dolore qui ad.",
					reviewContent:
						"Mollit pariatur consectetur ex aute duis esse. Nostrud ea veniam anim fugiat exercitation amet. Et eiusmod consequat dolor deserunt quis in laboris. Tempor ut ex ex reprehenderit sint dolore qui duis exercitation veniam quis consectetur qui laboris. Anim amet consectetur ut ea qui pariatur ad aute Lorem ut nulla duis amet excepteur.",
					reviewId: "7",
					reviewLink: "review-7",
					isFeatured: true,
				},
			],
		},
	};
}
