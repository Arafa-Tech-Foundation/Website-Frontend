import clsx from "clsx";
import Highlight from "react-highlight";

export default function Pre(props: any & { children: any }) {
	// @ts-ignore
	props = props.children.props;
	const language = props.className?.replace("language-", "") ?? "plaintext";
	return (
		<div className="mockup-code">
			<Highlight className={clsx(`language-${language}`)}>
				{props.children.split("\n").map((line: string, i: number) => (
					<pre
						className={clsx(`language-${language} m-0 p-0`)}
						data-prefix={i + 1}
						key={i}
					>
						{line}
					</pre>
				))}
			</Highlight>
		</div>
	);
}
