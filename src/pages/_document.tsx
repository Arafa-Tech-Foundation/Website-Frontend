import { Html, Head, Main, NextScript } from "next/document";
export const GA_TRACKING_ID = "G-JE5EESL3HD";

export default function Document() {
	return (
		<Html lang="en-us">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
					rel="stylesheet"
				/>
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
				/>
				<script
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_TRACKING_ID}',{page_path:window.location.pathname,});`,
					}}
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />

				<script
					dangerouslySetInnerHTML={{
						__html: `window.Givebutter=window.Givebutter||function(){(Givebutter.q=Givebutter.q||[]).push(arguments)};Givebutter.l=+new Date;window.Givebutter('setOptions',{"accountId":"y01Rpq1ZnNc2AuZW"});`,
					}}
				/>
				<script
					async
					src="https://js.givebutter.com/elements/latest.js"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
