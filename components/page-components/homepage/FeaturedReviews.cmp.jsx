export default function FeaturedReviews() {
	return (
		<div className='featuredReviews my-6'>
			<h2 className='pb-4 text-center text-2xl'>FEATURED REVIEWS</h2>
			{/* this will be a reviews grid which maps over review data and renders a card grid/row of clickable reviews which go to their own page */}
			<div className='reviewGrid grid grid-cols-3 grid-flow-row gap-6'>
				{/* each reviewCard will have an onClick, with the individual card buttons being "sugar" */}
				<div className=' reviewCard col-span-1 bg-slate-300 text-black rounded-xl px-6 py-2'>
					<h3 className=' text-center text-lg'>REVIEW TITLE</h3>
					<p>REVIEW META/SHORT DESCRIPTION</p>
					<div className='readMoreBtn text-center px-4 py-2 bg-red-400 text-white rounded-md mt-2 mb-1 hover:cursor-pointer hover:bg-red-500 hover:text-slate-100'>
						Read More
					</div>
				</div>
				<div className=' reviewCard col-span-1 bg-slate-300 text-black rounded-xl px-6 py-2'>
					<h3 className=' text-center text-lg'>REVIEW TITLE</h3>
					<p>REVIEW META/SHORT DESCRIPTION</p>
					<div className='readMoreBtn text-center px-4 py-2 bg-red-400 text-white rounded-md mt-2 mb-1 hover:cursor-pointer hover:bg-red-500 hover:text-slate-100'>
						Read More
					</div>
				</div>
				<div className=' reviewCard col-span-1 bg-slate-300 text-black rounded-xl px-6 py-2'>
					<h3 className=' text-center text-lg'>REVIEW TITLE</h3>
					<p>REVIEW META/SHORT DESCRIPTION</p>
					<div className='readMoreBtn text-center px-4 py-2 bg-red-400 text-white rounded-md mt-2 mb-1 hover:cursor-pointer hover:bg-red-500 hover:text-slate-100'>
						Read More
					</div>
				</div>
				{/* END TEMPLATE LIST OF REVIEWS ... will be dynamically mapped/rendered later */}
			</div>
		</div>
	);
}
