import Link from "next/link";

export default function Header() {
	return (
		<header>
			<div className='px-4 py-6 bg-slate-600 text-white flex flex-row justify-between'>
				<div className='logo'></div>
				<nav className='nav hidden md:flex md:flex-row md:gap-4 md:justify-end'>
					<Link href={`/`}>Homepage</Link>
					<Link href={`/blog-reviews`}>Reviews Blog</Link>
					<Link href={`/submit-review`}>Submit A Review</Link>
					<Link href={`/contact`}>Contact</Link>
				</nav>
				<div className='navMobile md:hidden'>
					<button>MOBILE MENU</button>
					<nav className='navMobile-linksContainer'>
						<ul>
							<li>Link 1</li>
							<li>Link 2</li>
						</ul>
					</nav>
				</div>
				{/* <nav className='navMobile md:hidden'>MOBILE MENU</nav> */}
			</div>
		</header>
	);
}
