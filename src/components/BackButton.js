import {useState} from "react";
import backButton from "../whiteBackButton.png";

export function BackButton({onClick}) {
	const [hover, setHover] = useState(false);
	const [clicked, setClicked] = useState(false);

	let finalStyle = styles.backButton;
	if (hover) {
		finalStyle = {...finalStyle, backgroundColor: "#4e4e4e"};
	}
	if (clicked) {
		finalStyle = {...finalStyle, opacity: 0.5};
	}

	return (
		<button
			style={finalStyle}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => {
				setHover(false);
				setClicked(false);
			}}
			onMouseDown={() => setClicked(true)}
			onMouseUp={() => setClicked(false)}
			onClick={onClick}
		>
			<img src={backButton.src} alt="Back" width={"60%"} />
		</button>
	);
}

const styles = {
	backButton: {
		position: "absolute",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(0,0,0,0)",
		borderRadius: "50%",
		width: "50px",
		height: "50px",
		border: "none",
		cursor: "pointer",
		margin: "10px",
	},
};
