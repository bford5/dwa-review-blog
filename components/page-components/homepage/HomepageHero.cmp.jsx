import Image from "next/image";

export default function HomepageHero() {
	return (
		<div className='homepageHero grid grid-cols-5 grid-flow-row gap-2 mt-4'>
			<div className='welcomeText col-span-5 md:col-span-3'>
				<h1 className='pb-4 text-center text-2xl'>WELCOME TEXT</h1>
				<p className='py-2'>
					Est dolor magna commodo esse fugiat deserunt qui dolor. Nisi Lorem
					sunt ad et sint nulla amet tempor esse. Et pariatur proident qui anim
					proident. Commodo nulla ullamco culpa laborum veniam adipisicing
					tempor labore enim labore cillum. Consectetur consequat proident quis
					ipsum reprehenderit dolore et. Occaecat fugiat eu aliqua eiusmod magna
					ex nisi elit deserunt irure commodo sunt. Ex anim deserunt amet
					reprehenderit.
				</p>
			</div>
			<div className='welcomeImage col-span-5 md:col-span-2 my-auto mx-auto'>
				<Image
					src={"/homepageHeroPic-12x.jpg"}
					width={180}
					height={180}
					className=' rounded-full mt-2 md:mt-4'
					alt='hero image'
				/>
			</div>
		</div>
	);
}
