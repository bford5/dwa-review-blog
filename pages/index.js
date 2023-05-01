import Image from "next/image";

import FeaturedReviews from "../components/page-components/homepage/FeaturedReviews.cmp";
import HomepageHero from "../components/page-components/homepage/HomepageHero.cmp";

export default function Home() {
	return (
		// PAGE ELEMENTS
		// page title/hero
		// featured blog reviews

		<section className=' w-5/6 md:w-3/4 mx-auto'>
			<HomepageHero />
			<FeaturedReviews />
		</section>
	);
}
