"use client";

import {MathJax, MathJaxContext} from "better-react-mathjax";
import parse from "html-react-parser";

const mathJaxConfig = {
	tex: {
		inlineMath: [["$", "$"]],
		displayMath: [["$$", "$$"]],
	},
};

export function ChatResponseComponent({response}) {
	return (
		<MathJaxContext config={mathJaxConfig}>
			<div style={styles.container}>
				<MathJax renderMode="post">{parse(response)}</MathJax>
			</div>
		</MathJaxContext>
	);
}

const styles = {
	container: {
		display: "flex",
		flex: 1,
		maxWidth: "100%",
		minHeight: "100%",
		color: "white",
		fontFamily: "sans-serif",
		fontSize: 25,
		padding: "5%",
		scrollbarColor: "black white",
	},
};
