export default function A(props: any) {
	return (
		<a
			target="_blank"
			rel="noreferrer"
			className="text-gradient hover:text-primary hover:bg-none"
			{...props}
		/>
	);
}
