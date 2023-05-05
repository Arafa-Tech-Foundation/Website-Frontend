import Footer from "./footer";
import Header from "./header";

export default function HomeLayout({
	children,
}: {
	children?: React.ReactNode;
}) {
	return (
		<div className="min-h-screen flex flex-col relative w-full">
			<Header />
			{children}
			<Footer />
		</div>
	);
}
