import "../styles/globals.css";

import Layout from "../components/layout/Layout.cmp";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
