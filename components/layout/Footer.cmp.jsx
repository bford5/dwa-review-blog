import Link from "next/link";

export default function Footer() {
	return (
		<footer>
			<div className='px-4 py-8 bg-zinc-700 text-white flex flex-row justify-between'>
				<nav className='footer-nav flex flex-col ml-2 md:ml-6 gap-2'>
					<Link href={`/`}>Homepage</Link>
					<Link href={`/blog-reviews`}>Reviews Blog</Link>
					<Link href={`/contact`}>Contact</Link>
				</nav>
				<div className='logo'></div>
				<div className='social-links'></div>
			</div>
		</footer>
	);
}
