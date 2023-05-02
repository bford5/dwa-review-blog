import { useState } from "react";

export default function SubmitReviewForm(props) {
	const [reviewLink, setReviewLink] = useState("");
	const [reviewTitle, setReviewTitle] = useState("");
	const [reviewDescription, setReviewDescription] = useState("");
	const [reviewContent, setReviewContent] = useState("");
	const [reviewIsFeatured, setReviewIsFeatured] = useState(false);

	const submitHandler = (e) => {
		e.preventDefault();

		// will need to add front-end/full validation to check reviewLink against existing DB entries.
		// can use getServersideProps to get back an array of objects only containing the existing reviewLinks and check against that.
		//

		fetch("/api/review", {
			method: "POST",
			body: JSON.stringify({
				reviewLink,
				reviewTitle,
				reviewDescription,
				reviewContent,
				reviewIsFeatured,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
	};

	return (
		<>
			<form
				onSubmit={submitHandler}
				className=' flex flex-col gap-4 bg-amber-900 text-white px-6 py-4 rounded-md text-center w-5/6 md:w-3/4 mx-auto mb-2'
			>
				<span className=''>
					<label htmlFor='reviewLink' className='hidden'>
						Review Link
					</label>
					<input
						type='text'
						id='reviewLink'
						className='formInput'
						placeholder='Review Link'
						required
						onChange={(e) => setReviewLink(e.target.value)}
						value={reviewLink}
					/>
					<span className=' block text-sm italic pt-0 pb-4'>
						format like: review-#, so review-8,9,...
					</span>
				</span>
				<span>
					<label htmlFor='reviewTitle' className='hidden'>
						Review Title
					</label>
					<input
						type='text'
						id='reviewTitle'
						placeholder='Review Title'
						className='formInput'
						required
						onChange={(e) => setReviewTitle(e.target.value)}
						value={reviewTitle}
					/>
				</span>
				<span>
					<label htmlFor='reviewIsFeatured'>Featured Review? </label>
					<button
						id='reviewIsFeatured'
						className='bg-black rounded-md p-2'
						onClick={(e) => {
							e.preventDefault();
							setReviewIsFeatured(!reviewIsFeatured);
						}}
						value={reviewIsFeatured}
					>
						{reviewIsFeatured === false ? "No" : "Yes"}
					</button>
				</span>
				<span className='text-center'>
					<label htmlFor='reviewDescription' className='hidden'>
						review description
					</label>
					<textarea
						id='reviewDescription'
						placeholder='Review Description'
						rows={3}
						className=' w-1/2 mx-auto p-4'
						required
						onChange={(e) => setReviewDescription(e.target.value)}
						value={reviewDescription}
					/>
				</span>
				<span className='text-center'>
					<label htmlFor='reviewContent' className='hidden'>
						review content
					</label>
					<textarea
						id='reviewContent'
						placeholder='Review Content'
						rows={7}
						className=' w-1/2 mx-auto p-4'
						required
						onChange={(e) => setReviewContent(e.target.value)}
						value={reviewContent}
					/>
				</span>
				<span className='submitArea'>
					<button type='submit' className='bg-black rounded-md px-4 py-2'>
						Submit Review
					</button>
				</span>
			</form>
		</>
	);
}
