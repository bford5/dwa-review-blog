import { useRef, useEffect, useState } from "react";

export default function ContactForm() {
	const contactName = useRef("");
	const contactEmail = useRef("");
	const contactOptIn = useRef("");
	const [newsletterOptIn, setNewsletterOptIn] = useState(false);

	const submitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<form
				onSubmit={submitHandler}
				className=' flex flex-col gap-4 bg-amber-900 text-white px-6 py-4 rounded-md text-center w-5/6 md:w-3/4 mx-auto mb-2'
			>
				<span className=''>
					<label htmlFor='contactName'>Contact Name </label>
					<input
						type='text'
						id='contactName'
						className='formInput'
						placeholder='name'
						required
					/>
				</span>
				<span>
					<label htmlFor='contactEmail'>Contact Email </label>
					<input
						type='email'
						id='reviecontactEmailwTitle'
						placeholder='email'
						className='formInput'
					/>
				</span>
				<span>
					<label htmlFor='reviewIsFeatured'>Newsletter Opt-in? </label>
					<button
						id='reviewIsFeatured'
						className='bg-black rounded-md p-2'
						onClick={(e) => {
							e.preventDefault();
							setNewsletterOptIn(!newsletterOptIn);
						}}
						value={newsletterOptIn}
					>
						{newsletterOptIn === false ? "No" : "Yes"}
					</button>
				</span>

				<span className='submitArea'>
					<button className='bg-black rounded-md px-4 py-2'>
						Submit Review
					</button>
				</span>
			</form>
		</>
	);
}
