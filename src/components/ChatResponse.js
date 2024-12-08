"use client";

import {MathJax, MathJaxContext} from "better-react-mathjax";
import parse from "html-react-parser";

export function ChatResponseComponent({response}) {
	return (
		<MathJaxContext>
			<div style={{display: "flex", flex: 1, backgroundColor: "#777777", maxWidth: "100%"}}>
				<div style={styles.container}></div>
				<MathJax renderMode="post">{parse(response)}</MathJax>
			</div>
		</MathJaxContext>
	);
}

const styles = {
	container: {
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "row",
		backgroundColor: "white",
		alignItems: "space-evenly",
		justifyContent: "flex-start",
		overflow: "hidden",
	},
};
