import Footer from "./Footer.cmp";
import Header from "./Header.cmp";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
