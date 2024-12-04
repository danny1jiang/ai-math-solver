export function ChatResponseComponent(contentStream) {
	const [text, setText] = useState("");

	return (
		<div>
			<p>{text}</p>
		</div>
	);
}
