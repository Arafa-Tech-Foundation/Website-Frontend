import "@styles/global.css";
import "highlight.js/styles/agate.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GA_TRACKING_ID } from "./_document";
import { SessionProvider } from "next-auth/react";

export default function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: unknown) => {
			// @ts-ignore
			window.gtag("config", GA_TRACKING_ID, {
				page_location: url,
			});
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	useEffect(() => {}, []);
	return (
		<>
			<DefaultSeo
				title="Free Coding / Programming Courses"
				description="Arafa Tech is a non-profit organization that provides coding education and mentorship to underprivileged students, empowering them with technology skills for the future."
				titleTemplate="%s | Arafa Tech"
				openGraph={{
					type: "website",
					locale: "en",
					url: "https://arafatech.org",
					site_name: "Arafa Tech",
				}}
			/>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</>
	);
}
