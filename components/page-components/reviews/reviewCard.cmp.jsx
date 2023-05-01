import { useRouter } from "next/router";

export default function ReviewCard(props) {
	const router = useRouter();

	const { reviewTitle, reviewDescription, reviewContent, reviewLink } =
		props.review;

	return (
		<>
			<div className=' reviewCard col-span-1 bg-slate-300 text-black rounded-xl px-6 py-2'>
				<h3 className=' text-center text-lg'>{reviewTitle}</h3>
				<p>{reviewDescription}</p>
				{/* truncate reviewContent */}
				<p>{reviewContent}</p>
				<div className='flex justify-center mt-2 mb-1'>
					<button
						onClick={() => {
							router.push(`/blog-reviews/${reviewLink}`);
						}}
						className='readMoreBtn text-center px-4 py-2 bg-red-400 text-white rounded-md hover:cursor-pointer hover:bg-red-500 hover:text-slate-100'
					>
						Read More
					</button>
				</div>
			</div>
		</>
	);
}
