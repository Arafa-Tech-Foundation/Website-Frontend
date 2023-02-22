import Footer from "./footer";
import Header from "./header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}