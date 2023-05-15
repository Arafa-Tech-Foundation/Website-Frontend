import clsx from "clsx";
import Highlight from "react-highlight";

export default function Pre(props: any & { children: any }) {
	// @ts-ignore
	props = props.children.props;
	const language = props.className?.replace("language-", "") ?? "plaintext";

	return (
		<pre className={clsx(props.className, "p-0")} tabIndex={0}>
			<Highlight className={clsx(`language-${language}`)}>
				{props.children}
			</Highlight>
		</pre>
	);
}
